# ONLY ONE

Version **V10400**.

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
  is readable on every other. The list is summaries only, so it loads fast; the 5 KB body
  of a run, letters included, is fetched when somebody opens it. Stored in Netlify Blobs
  through `/api/library`. With the library unreachable the app falls back to this phone's
  own runs and says so.
- **Notes** - sources, pocket chemistry, and the safety record of this approach.

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
