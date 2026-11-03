/* JO-One - the shared library.
 *
 * Moos: "I want the app to save everything! So all new users see new data too! So if
 * someone add insuline the new user see it!" - and, asked what leaves the phone:
 * everything, the letters too, so the next person can open the exact protein.
 *
 * Until now the app SAID "shared library" and kept every run in localStorage, which is
 * one phone, one browser. The words were wrong, not the code. This is the piece that
 * makes them true.
 *
 * WHY THE SUMMARY LIVES IN THE KEY
 * A list of runs has to load fast - Moos's standing rule is that the app opens fast and
 * never slower. The obvious shape, one index blob holding every summary, has two
 * people writing the same blob at the same time and one of them losing. The usual cure
 * is a conditional write with an etag, which is more moving parts than this needs.
 * So each run is its own blob, and everything the list has to show is encoded in the
 * KEY: when, who, what protein, how many slices. Listing is then ONE call that fetches
 * no run bodies at all, two writers never touch the same key, and the full 5 KB run is
 * fetched only when somebody opens it.
 *
 *   run/<at>_<id>_<n>_<win>_<holder>_<name>
 *
 * Only get, set, list and delete are used - the four calls the documentation is plain
 * about. Nothing here depends on conditional writes.
 */
import { getStore } from '@netlify/blobs';

const STORE   = 'jo1-library';
const PREFIX  = 'run/';
const SHOW    = 400;      /* how many the list hands back - V10300: the store already
                             KEEPS 400, so handing back only 200 hid half of what was
                             there. One run in the list is 126 bytes, so 400 is 49 KB,
                             and the Library draws one card however many runs there are. */
const KEEP    = 400;      /* how many are kept before the oldest are dropped */
const MAXBODY = 300 * 1024;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json',
               'cache-control': 'no-store' } });

/* ---- the key ---------------------------------------------------------------- */
/* Underscore separates the fields, so it must not survive inside one. */
const enc = (s, max) =>
  encodeURIComponent(String(s == null ? '' : s).slice(0, max)).replace(/_/g, '%5F');
const dec = s => { try { return decodeURIComponent(s); } catch (e) { return s; } };

function keyFor(r) {
  return PREFIX + [r.at, r.id, r.n, r.win, enc(r.holder, 40), enc(r.name, 60)].join('_');
}
function fromKey(key) {
  const bits = key.slice(PREFIX.length).split('_');
  if (bits.length < 6) return null;
  const at = +bits[0], id = +bits[1], n = +bits[2], win = +bits[3];
  if (!isFinite(at) || !isFinite(id) || !isFinite(n) || !isFinite(win)) return null;
  return { at, id, n, win, holder: dec(bits[4]), name: dec(bits[5]), key };
}

/* ---- what a run is allowed to be -------------------------------------------- */
/* Anyone can post here, so nothing is stored as it arrived. The run is rebuilt from
 * known fields at known sizes; anything else is dropped rather than trusted. */
const num = (v, lo, hi) => {
  const x = +v;
  return isFinite(x) ? Math.min(hi, Math.max(lo, x)) : null;
};
const str = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '');

function tidy(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const at  = num(raw.at, 0, 4102444800000);
  const id  = num(raw.id, 0, 4102444800000);
  const n   = num(raw.n, 1, 40000);
  const win = num(raw.win, 5, 30);
  if (at == null || id == null || n == null || win == null) return null;

  const seq = str(raw.seq, 24000).toUpperCase().replace(/[^A-Z]/g, '');
  if (seq.length < win) return null;

  const arr = (v, max, lo, hi) =>
    Array.isArray(v) ? v.slice(0, max).map(x => (x == null ? null : num(x, lo, hi))) : null;

  const b = raw.best && typeof raw.best === 'object' ? raw.best : null;

  return {
    id, at, n, win,
    name:   str(raw.name, 60)   || 'Pasted protein',
    holder: str(raw.holder, 40) || 'unknown',
    seq,
    ic:    arr(raw.ic, 40000, 0, 1e9),
    sel:   arr(raw.sel, 40000, 0, 200),
    h117:  arr(raw.h117, 200, 0, 1e9),
    best: b ? { start: num(b.start, 0, 40000),
                seq:   str(b.seq, 30).toUpperCase().replace(/[^A-Z]/g, ''),
                ic50:  b.ic50 == null ? null : num(b.ic50, 0, 1e9) } : null
  };
}

/* ---- oldest out, once there are too many ------------------------------------ */
async function prune(store, keys) {
  if (keys.length <= KEEP) return;
  const doomed = keys.slice(KEEP);
  for (const k of doomed) { try { await store.delete(k.key); } catch (e) {} }
}

export default async (req) => {
  let store;
  try { store = getStore(STORE); }
  catch (e) { return json({ error: 'no store' }, 503); }

  /* ---------------- read ---------------- */
  if (req.method === 'GET') {
    const url = new URL(req.url);
    const id  = url.searchParams.get('id');

    if (id) {
      const want = String(id);
      let keys;
      try { ({ blobs: keys } = await store.list({ prefix: PREFIX })); }
      catch (e) { return json({ error: 'list failed' }, 502); }
      const hit = keys.map(b => fromKey(b.key)).filter(Boolean)
                      .find(k => String(k.id) === want);
      if (!hit) return json({ error: 'not found' }, 404);
      let run;
      try { run = await store.get(hit.key, { type: 'json' }); }
      catch (e) { return json({ error: 'read failed' }, 502); }
      if (!run) return json({ error: 'not found' }, 404);
      return json({ run });
    }

    let keys;
    try { ({ blobs: keys } = await store.list({ prefix: PREFIX })); }
    catch (e) { return json({ error: 'list failed' }, 502); }
    const all = keys.map(b => fromKey(b.key)).filter(Boolean)
                    .sort((a, b) => b.at - a.at);
    return json({ runs: all.slice(0, SHOW).map(k => ({
      id: k.id, at: k.at, n: k.n, win: k.win, holder: k.holder, name: k.name })) });
  }

  /* ---------------- write --------------- */
  if (req.method === 'POST') {
    const len = +(req.headers.get('content-length') || 0);
    if (len > MAXBODY) return json({ error: 'too big' }, 413);

    let raw;
    try {
      const text = await req.text();
      if (text.length > MAXBODY) return json({ error: 'too big' }, 413);
      raw = JSON.parse(text);
    } catch (e) { return json({ error: 'bad json' }, 400); }

    const run = tidy(raw);
    if (!run) return json({ error: 'bad run' }, 400);

    const key = keyFor(run);
    try { await store.set(key, JSON.stringify(run)); }
    catch (e) { return json({ error: 'write failed' }, 502); }

    try {
      const { blobs } = await store.list({ prefix: PREFIX });
      const all = blobs.map(b => fromKey(b.key)).filter(Boolean)
                       .sort((a, b) => b.at - a.at);
      await prune(store, all);
    } catch (e) { /* the run is saved; tidying up can wait for the next write */ }

    return json({ ok: true, id: run.id });
  }

  return json({ error: 'method' }, 405);
};

export const config = { path: '/api/library' };
