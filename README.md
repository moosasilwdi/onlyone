# ONLY ONE

Version **V11800**.

Named JO-One until V10200. The name changed because the app is no longer about one
disease: any protein can be pasted in, and it measures its own grip lines.

Screens peptides against 117 HLA class II types and ranks what sits in the groove. The 117
are the types this app's engine can score, not all that exist - about 11,910 class II types
are named in IPD-IMGT/HLA.
Everything runs in the browser. No server, no build step.

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

## Deploy

Static site plus one function. Publish directory is the repository root.

    index.html                     the whole app
    w-DRB1.txt                     54 trained networks
    w-DRB345.txt                    7
    w-DQ.txt                       38
    w-DP.txt                       18
    netlify.toml                   publish directory, functions directory, cache headers
    package.json                   the one dependency the function needs
    netlify/functions/library.mjs  the shared library
    README.md

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
