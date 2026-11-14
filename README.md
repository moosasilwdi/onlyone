# ONLY ONE

Version **V12600**.

Named JO-One until V10200. The name changed because the app is no longer about one
disease: any protein can be pasted in, and it measures its own grip lines.

Screens peptides against 117 HLA class II types and ranks what sits in the groove. The 117
are the types this app's engine can score, not all that exist - about 11,910 class II types
are named in IPD-IMGT/HLA.
Everything runs in the browser. No server, no build step.



## V12500 - the lens is gone, and step 4 answers under your finger

**The lens is removed.** Moos: "I dont like the lense concept remove it." The 3.2x
magnifier that rose under a finger on the two grids is gone, element, styles and
all. A tap opens the square under the finger as it did before V12200; the whole
cell is the tap target, so a near miss still lands on a slice, and the teaching
hand and the breathing red ring stay.

**The card detail opens under the card you tapped.** Tapping the fourth card on
step 4 used to fill a panel 16,118px further down the page - and leave it shut, so
a tap did nothing you could see. The panel is not copied: the one that exists is
moved under the card and opened, so the crosscheck machinery comes with it. The
card you touched does not move - when the panel leaves a card higher up the page
shortens above your finger, so the page is scrolled by exactly that much in the
same frame. Only the cards below it go down.

**Step 4 leads to step 5.** Moos: "there is no relationship between step4 and
step5!". There was one - step 5 was already drawn from the slice chosen on step 4,
measured doing exactly that - but nothing said so. The detail now carries the same
button the slice drawer carries on step 3: "See this slice in the groove".

**"Check across all 117 types" is removed.** Moos: "why to choose 117! We already
showing all 117 cards right!?" Every scan already goes through all 117 for every
slice - measured, all 120 cards carry their chip before that button is touched,
with All 117 chosen and with one holder chosen. It was left from the app that
scanned ONE holder. Its one unique line, naming the other holders that also grip
the slice, is on step 3 where the 117 squares are there to tap. And on All 117 its
box contradicted the band above it - "Mostly selective" over "Not held" - because
it compares nM across holders that each have their own grip line.

**The button that remains is the page's own yellow**, full width, 56px, with black
type at 9.9:1 - the same as Copy, Email and the sort pill beside it.

**A fault caught by the suite while building this.** V12400 made the grid fetch the
shipped table whenever it covers the run. If that fetch failed - no signal, or the
file blocked - the grid gave up and said "not drawn", even though the run carries
its own 495 squares and the 117 networks can still answer for one slice. It falls
back to that road now. The fast check proves both roads give the same verdict and
the same numbers: the table 36ms and 0.30 MB, the networks 129ms and 15.62 MB.

## V12400 - the grey wall, and the two Go buttons

Three faults Moos found on the live app, all fixed and each with a check of its own
that fails on V12300.

**The grey wall.** After a reload, opening a slice showed all 117 holders grey -
"0 grip it, 0 hold it loosely, 117 do not" - the arrows changed the slice but
nothing on screen moved, and the squares answered no tap. The run carries its own
495-square wall, so the grid drew; but ONE slice's 117 holders are read from the
shipped table, and V12200 stopped loading that table at startup so the app would
open fast. Nothing fetched it back. Every holder came back "no answer" and was
drawn grey. The grid now fetches the table when the run is a protein the table
answers. Slice 474 reads 15 grip, 44 loose, 58 do not, which is what the table
holds. The app still opens with nothing downloaded.

**Both Go buttons.** The Go on the empty shortlist and the Go on the empty result
page were written when Scan lived on step 1. V12000 moved Scan to step 2 and left
them pointing at step 1, so pressing Go handed you a page with nothing to press.
Both land on step 2 now, and three lines of wording read "Press Scan on step 2".

**Scan lines up with the dropdown.** Scan stood at the card's full width while the
holder dropdown it fires stood 16px inside the card, so the control and its button
did not share an edge. Scan now takes the dropdown's own inset - measured, not a
typed number, so it holds from 320px to 500px - and the air below it goes from 14px
to 26px. Below 360px the caption keeps the full width, because the inset tipped it
onto a second line.

## What it does

- **Opening screen** - choose the protein here. A phone that has never chosen shows NO number:
  the digits roll, and the dropdown says "Choose a protein". Pick Jo-1, or pick "Paste another
  protein", name it and paste its letters - the count then counts up to its real value and the
  slice count follows what you type. The choice is kept on the device, so the app opens next
  time on whatever you were working on, with its number.
- **Protein** - the chosen protein, cut into every slice and ranked by predicted binding.
- **Decoy** - take one slice, swap every letter for all 19 others, keep the ones that still grip
  the holder but show the T cell a different face. Then check a candidate against all 117 types
  at once, because a peptide that grips many types would blunt normal defence against germs.
- **Groove** - the selected slice drawn in a scaled model of an MHC class II groove, labelled with
  the real pocket-lining residues of the selected HLA type. Drop in a solved `.pdb` or `.cif` and
  it renders that instead.
- **Library** - every run is saved, and the library is SHARED: a scan done on one phone
  is readable on every other. Runs are chosen by name from a list - "Jo-1 - window 15 -
  495 slices" - because a run is a protein AND a window, and three Jo-1 runs at 15, 20
  and 14 are three different questions. Choosing one draws THE GRID, which is three
  taps deep. From V11000 the Grid is drawn for EVERY run, whatever the protein and
  whatever the window, because a scan now works out the whole wall and keeps it with
  the run along with the grip lines it was judged against. TAP 1, the protein: one square for every slice, grey where no holder of
  the 117 grips it, blue where more than one does, green where exactly one does and no
  other - for Jo-1 cut into fifteens, 200 grey, 234 blue and 61 green, with the shape
  above them showing how many of the 117 grip each slice along the protein (peak 94 of
  117 at slice 132). TAP 2, one slice: its own 117 holders open underneath it, green
  gripping, blue loose, grey not - and where exactly one grips, the panel names it.
  TAP 3, one holder: its predicted value for that slice, its OWN top-5% grip line (the
  test is per holder, which is why a slice can belong to one holder and nobody else),
  where the slice ranks among the 495 for it, and that holder drawn across the whole
  protein with the slice marked. Both drawers open downward and nothing above them
  moves. A FULL VIEW button opens the whole wall - 117 holders down the side, 495
  slices along the bottom, 57,915 cells - fitted to one screen and drawn on a canvas;
  Export writes a 4234 x 2100 picture of it with the family names, the slice ruler and
  the key on it. The green marks in that picture are drawn larger than life, which it
  says on itself: there are 61 of them in 57,915 cells. The numbers come from the table that ships with the app, so the grid costs
  nothing to draw; any other protein, or any other window, has to be measured live and
  the app says so rather than drawing an empty grid. The list is summaries only, so it loads fast; the 5 KB body
  of a run, letters included, is fetched when somebody opens it. Stored in Netlify Blobs
  through `/api/library`. With the library unreachable the app falls back to this phone's
  own runs and says so.
- **Notes** - sources, pocket chemistry, and the safety record of this approach.

From V11100 the first screen carries the protein chooser on every visit. Until then it
was drawn only when nothing had been saved, so a phone that had run one scan had no way
to pick a protein at all. The number on that screen names the protein and the cut it was
made at, and a run saved before the whole wall existed is no longer offered back in place
of scanning - those were worked out from one holder's top 20 slices of 495, and handing
one back as an answer is how the app came to report 2 where a full scan gives 3.

From V11300 **nothing leaves the device.** The library was shared so that nobody had to
repeat an expensive scan; V11000 made a whole scan one press (168 ms for Jo-1 from the
shipped table, about 15 seconds for a pasted protein live), so sharing had come to save
a stranger fifteen seconds and cost them their protein. The three network calls are
gone rather than guarded. Runs are kept on the phone that made them and Export is the
only way one leaves.

From V11600 a run is **a protein and a holder**, and both are chosen every time. Nothing
is pre-picked, not even DRB1*03:01, and choosing a new protein clears the holder: a
different protein is a different question. One consequence worth knowing - the app now
downloads nothing at all until a holder is named.

From V11700 the **cut** is on the first screen beside the protein, because the number on
that screen is made of both: Jo-1 cut at 15 is 495 slices, cut at 16 it is 494.

From V11800 the app **says what it is doing**. Scan is greyed until a holder is chosen,
and the reason stands under the button instead of in the results caption off the screen -
pressed with nothing chosen, V11700 refused in silence. Coming out of the notes returns
you to the page you left, whichever of the eight it was; six of them came back to Holders
before. The phone's own back gesture now steps inside the app rather than leaving it, and
what the 117 holders cover is no longer unknown: they contain all 27 molecules of the
published reference panel, so they reach at least as far as its figure of over 98% of
people in every major population. That percentage is the panel's own, from allele
frequency data - a floor, not a count made here.

From V11900 the app stops leaving you standing still. The line under a greyed Scan
is itself the way to step 2, because naming a place and not going there is its own
dead end. The header picker reads **Notes** while a note is open: it used to go on
showing the page you came from, and a phone's picker fires nothing when you tap the
entry it is already showing, so that picker could not get you out of the notes from
any of the eight pages. And every page now carries the version in the footer, on the
line above Built with Claude, read off the Sources line so the two cannot disagree.

From V12300 the walk is **five steps**: Protein, Holders, Result, Shortlist,
Groove. The shortlist and the Groove were reachable but nothing led to them, which
also left Next dead at the end of step 3. They are steps 4 and 5 now, and each
step wears one of the four colours - red, blue, green, yellow - with the Groove
taking the app's ink, because repeating a colour would make two steps look alike.

The Graph came off. It drew the same profile step 3 already draws; its one useful
part, the arrows that walk the protein slice by slice, moved into the slice drawer
where a slice is already in hand.

The SCIENCE / ABSTRACT switch is gone from every page. It asked a question most
people never answered and cost every screen it sat on a row. The plain-English
wording is untouched in the file; the app simply stays on Science.

On the shortlist, the Send panel moved to the top - it had been 16,922 pixels down,
under all 120 rows - and lost its Send/Hide button: the text is simply there,
written for whichever slice is chosen, with Copy and Email beneath it.

From V12200 the app opens on **all 117 holders**. A scan always scored every slice
against all 117; the holder you picked only decided whose answer the screen pointed
at. So "All 117 holders" is a choice of its own now, and the one the app starts on -
nothing to choose before you can scan. Its answer is 61: the slices of Jo-1 that
exactly one of the 117 grips. THE ONLY ONE lists all 61 and names the one holder on
every row.

The grid can be hit now. A yellow hand presses a square once, to show the squares
are buttons; the square you open keeps a red ring that breathes; and holding a
finger on the grid raises a lens at 3.2x above it, with a frame on the square that
will open when you lift off. A fisheye was built first and thrown out - it shrank
the rim squares, which are already the hardest to hit, and it moved the squares, so
the grid stopped being a map of the protein while you touched it.

The three steps are named Protein, Holders and Result, on the page and in the
picker. The mark is red and green now: red frames what you are on, green is the
slice exactly one holder grips.

From V12100 the app **says its own answer**. Step 3 used to end with a grid and a
number: *005 of 495 slices of Jo-1 grip DRB1*03:01 alone.* It never said **which**
five. A last card, THE ONLY ONE, now names them - the letters, where they sit in the
protein, and how tightly they are held, tightest first - and each one opens its 117
holders at a tap. There is a file of just those five.

The result screen is four cards instead of one long one, each saying what it is:
your library, ALL SLICES, All holders, THE ONLY ONE.

Step 1 leads with the count in a box of its own, with the protein and the slice
length full width underneath and the choice pill last. Step 2 is yellow.

From V12000 **Scan stands on step 2**, under the holder picker. A scan needs a
protein and a holder, and step 2 is the first screen where both have been chosen;
on step 1 the button could only send people away to fetch the other half, and a
button that sends you elsewhere is a signpost. Moos read it off the screens
himself. It comes out blue without anyone painting it, because every step wears
its own colour - which also stops it breaking his rule that red is for warnings.
Step 3 is green at last: it never had a colour written for it and had been falling
back to the app default, the same blue as step 2.

## Deploy

A static site, nothing else. Publish directory is the repository root.

    index.html           the whole app
    w-DRB1.txt           54 trained networks
    w-DRB345.txt          7
    w-DQ.txt             38
    w-DP.txt             18
    w-jo1.txt            the shipped Jo-1 table, every slice against all 117
    netlify.toml         publish directory and cache headers
    package.json         left from the shared library, nothing imports it now
    icon.png             the mark
    apple-touch-icon.png the mark, for a home-screen shortcut
    README.md

There is no function any more. Until V11300 a Netlify function kept a shared library
of runs; sharing was removed because a whole scan became one press, and the function
was deleted with it. netlify.toml still names a functions directory that no longer
exists, and package.json still lists the dependency that function used - both are
harmless and both are left for Moos to decide on.

Each bundle is base64 float32, 139,952 characters per network, sliced by index in the browser.
Nothing to install or compile.

## The predictor

Models are the class II binding-affinity networks from **MHCnuggets 2.4.1** (Apache-2.0):

> Shao XM, Bhattacharya S, Fu J, et al. High-throughput prediction of MHC class I and II
> neoantigens with MHCnuggets. *Cancer Immunol Res* 2020;8(3):396-408.

The weights were read from the published package and the forward pass (masked LSTM, Keras 2
gate order, hard-sigmoid recurrent activation) is written out in `index.html` so that it runs
without TensorFlow.

Three epitopes whose restricting allele is settled in the literature are scored live whenever
the HLA type changes, as a check that the networks load correctly: influenza HA 306-318 on
DRB1\*01:01 (49 nM), myelin basic protein 85-99 on DRB1\*15:01 (6 nM), and HisRS 41-55 on
DRB1\*03:01. Each is tightest on its own type.

## Pocket residues

Taken from the **IPD-IMGT/HLA** protein alignments, release 3.66.0. The positions shown are
P1 = b85, b86; P4 = b13, b70, b71, b74; P6 = b11, b30; P9 = b9, b57. The parser was calibrated
by reproducing the nine DRB1\*03:01 residues reported in the literature (b9 E, b11 S, b13 S,
b57 D, b70 Q, b71 K, b74 R, b85 V, b86 V). For DQ and DP only the beta chain is shown; the
alpha chain also contributes.

## Limits

A pasted protein is judged against its own grip lines, measured from its own slices; Jo-1 uses
the table that ships with the app. The result line says which was used.

What you paste is sent to a library other people can read. There is no account and no
sign-in, and nothing else about you is sent. Anyone can post, so the function rebuilds
every run from known fields at known sizes rather than storing what arrived.

Predictions, not measurements. A laboratory would repeat them with NetMHCIIpan or MixMHC2pred
and then test in cells. The groove geometry is generated at correct physical scale, not solved
coordinates - only the pocket labels change between HLA types.

**Peptides designed to occupy an MHC class II groove have reached clinical trial twice in
multiple sclerosis, and both trials were stopped - one because patients got worse.** See the
Notes tab. This is a research filter, not a clinical tool, and not medical advice.

## Licence

App code: MIT. Model weights: Apache-2.0, from MHCnuggets.\n
## V12600 - a press of Scan always ends in an answer

Moos, on the live app: "I make scan but nothing happened! Step 4 does not change
nothing happened to it too."

He was right, and it was worse than it looked. With the same run already saved on
the phone - which is the normal state after the first scan - pressing Scan found
that run, put up the "Already in the library" panel, and stopped. Measured at that
moment: **0 results, 0 rows**, step 4 still saying "Nothing scanned yet". A press
of Scan ended in nothing at all unless you noticed the small panel and pressed
"Open it".

The saved run is the answer. The panel said so itself - "scanning again does the
same work and replaces it" - so there was never a question worth asking. Scan now
opens that run on the spot and lands on step 3, where a fresh scan lands; the
panel becomes one quiet line saying where the answer came from, and **Scan again**
stays beside it for anyone who wants the work redone.

This was not new in V12500. The panel has been there since V11100; it simply had
not been pressed into in that order before.

# ONLY ONE

Version **V12600**.

Named JO-One until V10200. The name changed because the app is no longer about one
disease: any protein can be pasted in, and it measures its own grip lines.

Screens peptides against 117 HLA class II types and ranks what sits in the groove. The 117
are the types this app's engine can score, not all that exist - about 11,910 class II types
are named in IPD-IMGT/HLA.
Everything runs in the browser. No server, no build step.



## V12500 - the lens is gone, and step 4 answers under your finger

**The lens is removed.** Moos: "I dont like the lense concept remove it." The 3.2x
magnifier that rose under a finger on the two grids is gone, element, styles and
all. A tap opens the square under the finger as it did before V12200; the whole
cell is the tap target, so a near miss still lands on a slice, and the teaching
hand and the breathing red ring stay.

**The card detail opens under the card you tapped.** Tapping the fourth card on
step 4 used to fill a panel 16,118px further down the page - and leave it shut, so
a tap did nothing you could see. The panel is not copied: the one that exists is
moved under the card and opened, so the crosscheck machinery comes with it. The
card you touched does not move - when the panel leaves a card higher up the page
shortens above your finger, so the page is scrolled by exactly that much in the
same frame. Only the cards below it go down.

**Step 4 leads to step 5.** Moos: "there is no relationship between step4 and
step5!". There was one - step 5 was already drawn from the slice chosen on step 4,
measured doing exactly that - but nothing said so. The detail now carries the same
button the slice drawer carries on step 3: "See this slice in the groove".

**"Check across all 117 types" is removed.** Moos: "why to choose 117! We already
showing all 117 cards right!?" Every scan already goes through all 117 for every
slice - measured, all 120 cards carry their chip before that button is touched,
with All 117 chosen and with one holder chosen. It was left from the app that
scanned ONE holder. Its one unique line, naming the other holders that also grip
the slice, is on step 3 where the 117 squares are there to tap. And on All 117 its
box contradicted the band above it - "Mostly selective" over "Not held" - because
it compares nM across holders that each have their own grip line.

**The button that remains is the page's own yellow**, full width, 56px, with black
type at 9.9:1 - the same as Copy, Email and the sort pill beside it.

**A fault caught by the suite while building this.** V12400 made the grid fetch the
shipped table whenever it covers the run. If that fetch failed - no signal, or the
file blocked - the grid gave up and said "not drawn", even though the run carries
its own 495 squares and the 117 networks can still answer for one slice. It falls
back to that road now. The fast check proves both roads give the same verdict and
the same numbers: the table 36ms and 0.30 MB, the networks 129ms and 15.62 MB.

## V12400 - the grey wall, and the two Go buttons

Three faults Moos found on the live app, all fixed and each with a check of its own
that fails on V12300.

**The grey wall.** After a reload, opening a slice showed all 117 holders grey -
"0 grip it, 0 hold it loosely, 117 do not" - the arrows changed the slice but
nothing on screen moved, and the squares answered no tap. The run carries its own
495-square wall, so the grid drew; but ONE slice's 117 holders are read from the
shipped table, and V12200 stopped loading that table at startup so the app would
open fast. Nothing fetched it back. Every holder came back "no answer" and was
drawn grey. The grid now fetches the table when the run is a protein the table
answers. Slice 474 reads 15 grip, 44 loose, 58 do not, which is what the table
holds. The app still opens with nothing downloaded.

**Both Go buttons.** The Go on the empty shortlist and the Go on the empty result
page were written when Scan lived on step 1. V12000 moved Scan to step 2 and left
them pointing at step 1, so pressing Go handed you a page with nothing to press.
Both land on step 2 now, and three lines of wording read "Press Scan on step 2".

**Scan lines up with the dropdown.** Scan stood at the card's full width while the
holder dropdown it fires stood 16px inside the card, so the control and its button
did not share an edge. Scan now takes the dropdown's own inset - measured, not a
typed number, so it holds from 320px to 500px - and the air below it goes from 14px
to 26px. Below 360px the caption keeps the full width, because the inset tipped it
onto a second line.

## What it does

- **Opening screen** - choose the protein here. A phone that has never chosen shows NO number:
  the digits roll, and the dropdown says "Choose a protein". Pick Jo-1, or pick "Paste another
  protein", name it and paste its letters - the count then counts up to its real value and the
  slice count follows what you type. The choice is kept on the device, so the app opens next
  time on whatever you were working on, with its number.
- **Protein** - the chosen protein, cut into every slice and ranked by predicted binding.
- **Decoy** - take one slice, swap every letter for all 19 others, keep the ones that still grip
  the holder but show the T cell a different face. Then check a candidate against all 117 types
  at once, because a peptide that grips many types would blunt normal defence against germs.
- **Groove** - the selected slice drawn in a scaled model of an MHC class II groove, labelled with
  the real pocket-lining residues of the selected HLA type. Drop in a solved `.pdb` or `.cif` and
  it renders that instead.
- **Library** - every run is saved, and the library is SHARED: a scan done on one phone
  is readable on every other. Runs are chosen by name from a list - "Jo-1 - window 15 -
  495 slices" - because a run is a protein AND a window, and three Jo-1 runs at 15, 20
  and 14 are three different questions. Choosing one draws THE GRID, which is three
  taps deep. From V11000 the Grid is drawn for EVERY run, whatever the protein and
  whatever the window, because a scan now works out the whole wall and keeps it with
  the run along with the grip lines it was judged against. TAP 1, the protein: one square for every slice, grey where no holder of
  the 117 grips it, blue where more than one does, green where exactly one does and no
  other - for Jo-1 cut into fifteens, 200 grey, 234 blue and 61 green, with the shape
  above them showing how many of the 117 grip each slice along the protein (peak 94 of
  117 at slice 132). TAP 2, one slice: its own 117 holders open underneath it, green
  gripping, blue loose, grey not - and where exactly one grips, the panel names it.
  TAP 3, one holder: its predicted value for that slice, its OWN top-5% grip line (the
  test is per holder, which is why a slice can belong to one holder and nobody else),
  where the slice ranks among the 495 for it, and that holder drawn across the whole
  protein with the slice marked. Both drawers open downward and nothing above them
  moves. A FULL VIEW button opens the whole wall - 117 holders down the side, 495
  slices along the bottom, 57,915 cells - fitted to one screen and drawn on a canvas;
  Export writes a 4234 x 2100 picture of it with the family names, the slice ruler and
  the key on it. The green marks in that picture are drawn larger than life, which it
  says on itself: there are 61 of them in 57,915 cells. The numbers come from the table that ships with the app, so the grid costs
  nothing to draw; any other protein, or any other window, has to be measured live and
  the app says so rather than drawing an empty grid. The list is summaries only, so it loads fast; the 5 KB body
  of a run, letters included, is fetched when somebody opens it. Stored in Netlify Blobs
  through `/api/library`. With the library unreachable the app falls back to this phone's
  own runs and says so.
- **Notes** - sources, pocket chemistry, and the safety record of this approach.

From V11100 the first screen carries the protein chooser on every visit. Until then it
was drawn only when nothing had been saved, so a phone that had run one scan had no way
to pick a protein at all. The number on that screen names the protein and the cut it was
made at, and a run saved before the whole wall existed is no longer offered back in place
of scanning - those were worked out from one holder's top 20 slices of 495, and handing
one back as an answer is how the app came to report 2 where a full scan gives 3.

From V11300 **nothing leaves the device.** The library was shared so that nobody had to
repeat an expensive scan; V11000 made a whole scan one press (168 ms for Jo-1 from the
shipped table, about 15 seconds for a pasted protein live), so sharing had come to save
a stranger fifteen seconds and cost them their protein. The three network calls are
gone rather than guarded. Runs are kept on the phone that made them and Export is the
only way one leaves.

From V11600 a run is **a protein and a holder**, and both are chosen every time. Nothing
is pre-picked, not even DRB1*03:01, and choosing a new protein clears the holder: a
different protein is a different question. One consequence worth knowing - the app now
downloads nothing at all until a holder is named.

From V11700 the **cut** is on the first screen beside the protein, because the number on
that screen is made of both: Jo-1 cut at 15 is 495 slices, cut at 16 it is 494.

From V11800 the app **says what it is doing**. Scan is greyed until a holder is chosen,
and the reason stands under the button instead of in the results caption off the screen -
pressed with nothing chosen, V11700 refused in silence. Coming out of the notes returns
you to the page you left, whichever of the eight it was; six of them came back to Holders
before. The phone's own back gesture now steps inside the app rather than leaving it, and
what the 117 holders cover is no longer unknown: they contain all 27 molecules of the
published reference panel, so they reach at least as far as its figure of over 98% of
people in every major population. That percentage is the panel's own, from allele
frequency data - a floor, not a count made here.

From V11900 the app stops leaving you standing still. The line under a greyed Scan
is itself the way to step 2, because naming a place and not going there is its own
dead end. The header picker reads **Notes** while a note is open: it used to go on
showing the page you came from, and a phone's picker fires nothing when you tap the
entry it is already showing, so that picker could not get you out of the notes from
any of the eight pages. And every page now carries the version in the footer, on the
line above Built with Claude, read off the Sources line so the two cannot disagree.

From V12300 the walk is **five steps**: Protein, Holders, Result, Shortlist,
Groove. The shortlist and the Groove were reachable but nothing led to them, which
also left Next dead at the end of step 3. They are steps 4 and 5 now, and each
step wears one of the four colours - red, blue, green, yellow - with the Groove
taking the app's ink, because repeating a colour would make two steps look alike.

The Graph came off. It drew the same profile step 3 already draws; its one useful
part, the arrows that walk the protein slice by slice, moved into the slice drawer
where a slice is already in hand.

The SCIENCE / ABSTRACT switch is gone from every page. It asked a question most
people never answered and cost every screen it sat on a row. The plain-English
wording is untouched in the file; the app simply stays on Science.

On the shortlist, the Send panel moved to the top - it had been 16,922 pixels down,
under all 120 rows - and lost its Send/Hide button: the text is simply there,
written for whichever slice is chosen, with Copy and Email beneath it.

From V12200 the app opens on **all 117 holders**. A scan always scored every slice
against all 117; the holder you picked only decided whose answer the screen pointed
at. So "All 117 holders" is a choice of its own now, and the one the app starts on -
nothing to choose before you can scan. Its answer is 61: the slices of Jo-1 that
exactly one of the 117 grips. THE ONLY ONE lists all 61 and names the one holder on
every row.

The grid can be hit now. A yellow hand presses a square once, to show the squares
are buttons; the square you open keeps a red ring that breathes; and holding a
finger on the grid raises a lens at 3.2x above it, with a frame on the square that
will open when you lift off. A fisheye was built first and thrown out - it shrank
the rim squares, which are already the hardest to hit, and it moved the squares, so
the grid stopped being a map of the protein while you touched it.

The three steps are named Protein, Holders and Result, on the page and in the
picker. The mark is red and green now: red frames what you are on, green is the
slice exactly one holder grips.

From V12100 the app **says its own answer**. Step 3 used to end with a grid and a
number: *005 of 495 slices of Jo-1 grip DRB1*03:01 alone.* It never said **which**
five. A last card, THE ONLY ONE, now names them - the letters, where they sit in the
protein, and how tightly they are held, tightest first - and each one opens its 117
holders at a tap. There is a file of just those five.

The result screen is four cards instead of one long one, each saying what it is:
your library, ALL SLICES, All holders, THE ONLY ONE.

Step 1 leads with the count in a box of its own, with the protein and the slice
length full width underneath and the choice pill last. Step 2 is yellow.

From V12000 **Scan stands on step 2**, under the holder picker. A scan needs a
protein and a holder, and step 2 is the first screen where both have been chosen;
on step 1 the button could only send people away to fetch the other half, and a
button that sends you elsewhere is a signpost. Moos read it off the screens
himself. It comes out blue without anyone painting it, because every step wears
its own colour - which also stops it breaking his rule that red is for warnings.
Step 3 is green at last: it never had a colour written for it and had been falling
back to the app default, the same blue as step 2.

## Deploy

A static site, nothing else. Publish directory is the repository root.

    index.html           the whole app
    w-DRB1.txt           54 trained networks
    w-DRB345.txt          7
    w-DQ.txt             38
    w-DP.txt             18
    w-jo1.txt            the shipped Jo-1 table, every slice against all 117
    netlify.toml         publish directory and cache headers
    package.json         left from the shared library, nothing imports it now
    icon.png             the mark
    apple-touch-icon.png the mark, for a home-screen shortcut
    README.md

There is no function any more. Until V11300 a Netlify function kept a shared library
of runs; sharing was removed because a whole scan became one press, and the function
was deleted with it. netlify.toml still names a functions directory that no longer
exists, and package.json still lists the dependency that function used - both are
harmless and both are left for Moos to decide on.

Each bundle is base64 float32, 139,952 characters per network, sliced by index in the browser.
Nothing to install or compile.

## The predictor

Models are the class II binding-affinity networks from **MHCnuggets 2.4.1** (Apache-2.0):

> Shao XM, Bhattacharya S, Fu J, et al. High-throughput prediction of MHC class I and II
> neoantigens with MHCnuggets. *Cancer Immunol Res* 2020;8(3):396-408.

The weights were read from the published package and the forward pass (masked LSTM, Keras 2
gate order, hard-sigmoid recurrent activation) is written out in `index.html` so that it runs
without TensorFlow.

Three epitopes whose restricting allele is settled in the literature are scored live whenever
the HLA type changes, as a check that the networks load correctly: influenza HA 306-318 on
DRB1\*01:01 (49 nM), myelin basic protein 85-99 on DRB1\*15:01 (6 nM), and HisRS 41-55 on
DRB1\*03:01. Each is tightest on its own type.

## Pocket residues

Taken from the **IPD-IMGT/HLA** protein alignments, release 3.66.0. The positions shown are
P1 = b85, b86; P4 = b13, b70, b71, b74; P6 = b11, b30; P9 = b9, b57. The parser was calibrated
by reproducing the nine DRB1\*03:01 residues reported in the literature (b9 E, b11 S, b13 S,
b57 D, b70 Q, b71 K, b74 R, b85 V, b86 V). For DQ and DP only the beta chain is shown; the
alpha chain also contributes.

## Limits

A pasted protein is judged against its own grip lines, measured from its own slices; Jo-1 uses
the table that ships with the app. The result line says which was used.

What you paste is sent to a library other people can read. There is no account and no
sign-in, and nothing else about you is sent. Anyone can post, so the function rebuilds
every run from known fields at known sizes rather than storing what arrived.

Predictions, not measurements. A laboratory would repeat them with NetMHCIIpan or MixMHC2pred
and then test in cells. The groove geometry is generated at correct physical scale, not solved
coordinates - only the pocket labels change between HLA types.

**Peptides designed to occupy an MHC class II groove have reached clinical trial twice in
multiple sclerosis, and both trials were stopped - one because patients got worse.** See the
Notes tab. This is a research filter, not a clinical tool, and not medical advice.

## Licence

App code: MIT. Model weights: Apache-2.0, from MHCnuggets.
