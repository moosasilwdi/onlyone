# ONLY ONE

Version **V14200**.

Named JO-One until V10200. The name changed because the app is no longer about one
disease: any protein can be pasted in, and it measures its own grip lines.

Screens peptides against 117 HLA class II types and ranks what sits in the groove. The 117
are the types this app's engine can score, not all that exist - about 11,910 class II types
are named in IPD-IMGT/HLA.
Everything runs in the browser. No server, no build step.



## V14200 - the dark language, the app's own menu, and a pill that slides

**Where the light goes in the dark.** V14100 made the plain controls light grey
slabs; Moos wanted the opposite: "the gary color must be very dark with inner ligt
if it si drop menu and outer light if it si pill or button". The fill is #141c27 now,
a shade off the page, and the light sits on an edge - OUTSIDE a button or pill, so it
reads as raised, INSIDE a drop menu, so it reads as a recess. The darkctl and seenbtn
checks read that light now instead of demanding a light fill, and the dark check
reads the inner line on the protein box for the same reason.

**The menu is the app's own.** "the drop menues looks bad and why coloured, they must
be white with transpaern2 25% and larger widht and opens smoothliy with aniamtion."
The list a <select> drops is drawn by the browser: it takes the select's colour, it
is as wide as its longest word, and it cannot be animated. The pill is still a real
select - everything that drives the app still drives it, and so do the checks - but
its list is stopped and the app draws one in its place: white at 75% with the page
showing through, 252px against the pill's 126, sliding open. Both pills use it.

**The switch is one pill with a sliding thumb.** "here the pill it looks like 2
buttons" and "the slide pill button in proten page musr act as pill wwith slide,
slide to be realtime". The red was painted onto whichever half was pressed. It is one
piece now, inside one track, and it follows a finger dragged across it, snapping to
the half the finger was in when it is let go.

**The door to step 5, where it can be seen.** "still whien i click th eresutlt th
ebutton is not shown,,,the button must be always abiove th enexx bitton" - and he
drew it: the button inside the panel, under the slice's name, in plain sight. Tapping
a card low on the page opened the panel below the fold and took the button with it,
at 905 on a screen 844 tall. The page is lifted by exactly the overlap now, so the
button lands above the bar and the card that was tapped stays on the screen.

## V14100 - five things from Moos's own screens

**A control you cannot see in the dark.** V14000 gave the plain controls an edge;
Moos wanted the fill: "in dark mode th rbalck buttons are not shown, so you need to
give them back light,, make sure this is the standerd in all pages in the app".
Measured in the dark across all eight pages, fifteen controls stood between 1.00 and
1.25 against the page - the sun button everywhere, FASTA file, the cut picker, both
halves of the choice on step 1, and the protein, holder and run pickers. They carry
#5c6a84 now: shape 3.7, white word 5.5. A control wearing one of the four colours
keeps its colour, the step pill and notes pill carry the page's colour, the
Back/Next bar keeps its white pill, and the typing boxes keep the dark behind the
letters.

**The file and the cut, on one line.** Moos's own idea: "may be the FASTA button we
make it 2/3 and slice lenght 1/3 all in one line!" Step 1 measured 790px against the
764 above the floating bar, so it overflowed and his choice pill kept sliding under
it. Side by side takes out a 50px field, its label and the gap - 82px - and the step
fits. The short label went from SLICE LENGTH to CUT AT: at 320px a third of the row
is 87px, where the long one wraps and the short one does not.

**"How it works" wore a blue pill.** No colour had ever been written for that page,
so it fell through to the app's default while Notes, its twin in the same menu, wore
the ink one. It takes the ink pill now, in both themes.

**The message on step 4 is folded away.** It was 306px of text sitting open above
the two buttons. Copy and Email come first; the text is one tap under a fold whose
word does not change when it opens - the Send/Hide confusion taken out in V12300 is
not coming back in another shape. The line above it says what it is: "Your result as
text - copy it or email it."

**"See this slice in the groove" is the first thing in the panel.** It had been last
since V12400, under everything the panel says, and measured when a card is opened it
sat at 767-823 - inside the floating bar's band, so the one thing Moos wanted was the
one thing covered. It opens at 575 now, with the bar starting at 764.

## V14000 - the word on a colour, and buttons you can see in the dark

Two rules from Moos, both measured before and after.

**"text in color button or pill to be white excpet in yellow to be black becuse
yellow is light color."** Every button, every step pill and the round in the
Back/Next bar now carries a white word on red, blue and green, and a black one on
yellow - the same in the light theme and the dark one. In the dark the buttons also
stopped borrowing the pale twin of each colour and wear the real one, which turned
up a fault nobody had reported: the round in the bar was white on pale green at
2.2:1. White on the vivid green reads 3.1:1 rather than 4.5, which is Moos's own
decision taken with the figure in front of him - "The green is very dark...why...
just ised normal vivid green with white" - and it is written into the contrast and
onword checks as that, so it stays visible instead of disappearing under a lower
floor. Everything else in the app still has to reach 4.5.

**"the blak buttons to have light behind them in the dark mood becuse they are not
shown."** In the dark the unpressed buttons under the picture on step 5 stood at
1.1:1 against the page, with a 1.33 edge: the word read at 14.8 with nothing under
it that looked like a button. They take a #5c6a84 fill now - shape 3.7, white word
5.5 - while the pressed pill stays the bright one, so the two states are still told
apart at a glance. The same fault, measured in the same pass, was in the drop-downs
(1.2), the round sun button (1.08) and the choice track on step 1 (1.1); those keep
their dark fill and take an edge that can be seen.

The version skips V13000. Moos avoids 13.

## V12900 - words you can read on every button, and the arrows set free

Four things Moos found on the live app.

**White type on a white pill.** On step 5 in the dark, a pressed button - Holes,
Teeth - was white type on a near-white pill: 1.2:1, unreadable. The pressed state
took the page's accent colour as its fill while the type stayed white, and in the
dark every accent turns light. The type now takes the page's own "ink on the
button" figure, so it follows the fill instead of being fixed: white on the red
and the blue, black on the green and the yellow, and black on every colour in the
dark. Measured, not guessed - 182 readings of real painted colour across five
screens in both schemes, the lowest 5.2:1.

**The result arrows were buried.** The row that walks through the answers -
left arrow, "1 of 120", right arrow - sat entirely underneath the floating
Back/Next bar, so it could not be pressed. It has its own row now, above that
bar. Moving it shortened the picture by 50px, so the 3D framing was measured
again: 1.18 fills 94% across and keeps 16 and 28 device pixels clear of the
edges, where 1.26 touched the left edge.

**The step pill in the header.** It was an outline with the colour only in its
frame. It is filled solid with the step's own colour now, on all seven screens
in both schemes.

**A stale line in the email.** The text the app writes for you still said to
press Narrow, a button removed in V12700. A run saved before that now says so
plainly instead of pointing at a button that no longer exists.

## V12800 - the air gap above the picture

Moos: "there is still air gap above the midel waste of space! The model must be
larger." He was right, and V12700's explanation of it was wrong. The zoom figure
was never the cause.

Measured on the real screen: 35% of the picture empty ABOVE the drawing and 1%
below, its middle 88px low. The viewer centres the model in the WHOLE canvas - but
the canvas does not all show. The line naming the dark chain covers its top and the
floating controls cover 148px of its bottom, so the model hung low and ran behind
the buttons. Zooming in only cropped the bottom harder, which is why V12700's
attempt looked like it did nothing.

frameGroove() lifts the picture by the difference between the middle of the canvas
and the middle of the part that can actually be seen - read off the page, not typed,
so it follows that caption line when it wraps to two rows - and then brings it 5%
closer. Measured after: 19% empty above, 14% below, 95% across, nothing touching an
edge.

The 5% is applied only when a scan is loaded. With nothing scanned the picture is
the bare groove, which lies wider: the holes check found that same 5% running the
drawing 70px off the edge. The lift itself is safe in both states, because it only
undoes the layout.

## V12700 - the Narrow button, the reference block, and a strip a mouse can slide

**Narrow is gone for a run that carries its own wall.** finishScan puts that button
away because a scan already does its work for all 495 slices; opening a saved run
never did, so it came back and Moos pressed it. Measured what that cost: the top
card went from 363-377, the tightest slice at 2.7 nM, to 140-154 - the real answer
no longer first - and it printed "20 slices checked ... 0 grip All 117 holders
alone ... 20 are not gripped by All 117 holders itself", which is false; 61 slices
are gripped by exactly one holder. It can only make the answer worse, so it goes,
and the run's own wall summary is written in its place.

**The reference block is back in the bottom right.** Moos: "the cube referance box
is up , it must be down right correner". It had been moved to the top because the
controls float along the bottom - a real reason, so it is not simply put back. It
is placed by measurement now, not by a typed number: the control block runs from
y 616 to 764 with a scan loaded and is shorter without one, and the line naming the
dark chain wraps to two rows on a narrow phone. placeCube() reads whatever floats
at the foot of the picture and sets the block to clear it by 8px. It also keeps its
place when Full view is pressed instead of dropping 87px, because a thing that
moves on its own while you are looking at it is what Moos has asked not to happen.

**The control strip slides with a mouse, and says there is more.** Measured at 390,
900 and 1280 wide: 678px of buttons in a 408px strip, and the wheel moved it zero
pixels - so Move, Reset, Full view and Load .pdb could not be reached at all with a
mouse. A wheel over the strip now slides it sideways and it can be dragged with the
pointer held down. A drag does not also press the button it started on.

**An arrow, not only a fade.** A fade on the edge is easy to miss. An arrow sits in
it on whichever side still has buttons, points that way, and nudges three times
when the picture opens - then rests. Once the strip has actually been slid it never
nudges again, remembered on that phone like the hand on the grid.

**The opening view comes closer - but it does NOT fill the frame yet.** 0.50 ->
0.54, which moves the camera from 162 to 139. That is as far as this figure goes:
measured with the holes check in the state where nothing has been scanned, 0.57
already runs 81 pixels off the side in the plain wording. A closer figure for the
state where a slice IS loaded was tried and changed nothing - the opening view on
that path is restored from a remembered view, not built from this number, so the
number never reaches it. That is a separate piece of work and it has not been done.

## V12600 - a press of Scan always ends in an answer

Moos, on the live app: "I make scan but nothing happened! Step 4 does not change
nothing happened to it too."

He was right. With the same run already saved on the phone - the normal state after
the first scan - pressing Scan found that run, put up the "Already in the library"
panel, and stopped. Measured at that moment: 0 results, 0 rows, step 4 still saying
"Nothing scanned yet". A press of Scan ended in nothing at all unless you noticed
the small panel and pressed "Open it".

The saved run is the answer. The panel said so itself - "scanning again does the
same work and replaces it" - so there was never a question worth asking. Scan now
opens that run on the spot and lands on step 3, where a fresh scan lands; the panel
becomes one quiet line saying where the answer came from, and **Scan again** stays
beside it for anyone who wants the work redone.

This was not new in V12500. The panel has been there since V11100; it simply had
not been pressed into in that order before.

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
