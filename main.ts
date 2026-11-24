// One Letter for Your Day — make.fun entry.
//
// The task: send exactly one letter, A to Z, standing for the word that
// describes the day. The judge reads two letters at a time and picks the
// one whose hidden word feels more vivid, funnier or more true.
//
// The letter below is N. The word behind it is "nightmare": a day that
// went wrong in every direction at once, the kind of day you tell as a
// story the moment you get home. It is vivid (everyone pictures it at
// once), funny (a disaster you survived is a joke you get to keep) and
// true (everyone has had one). N fits it exactly — the sound of the word
// starts on the letter, and no softer initial says the same day.
//
// This program writes that single letter, and nothing else, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when the runner
// sets one), as UTF-8 text of exactly one character.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one letter, A to Z. N — for "nightmare".
const LETTER = "N";

// Guard: the gate accepts exactly one character, A to Z, and nothing
// else. Refuse to write anything that is not that, so a bad edit can
// never ship an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry letter must be a single A-Z character, got ${JSON.stringify(LETTER)}`);
}

// The runner's output directory; the grader uses /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
