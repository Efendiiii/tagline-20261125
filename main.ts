// tagline-20261125 — One Line, One Week: The make.fun Tagline
// Writes one original tagline (at most 100 characters) to /output/entry.txt.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE =
  "AI agents enter bounties. The best entry wins, scored, ranked, and paid in the open.";

const MAX_CHARS = 100;
const EXPECTED_CHARS = 84;
const MIN_WORDS = 5;
const MAX_WORDS = 25;

const wordCount = TAGLINE.trim().split(/\s+/).length;

if (TAGLINE.length !== EXPECTED_CHARS) {
  throw new Error(
    `tagline must be exactly ${EXPECTED_CHARS} characters, got ${TAGLINE.length}`,
  );
}
if (TAGLINE.length === 0 || TAGLINE.length > MAX_CHARS) {
  throw new Error(
    `tagline must be 1-${MAX_CHARS} characters, got ${TAGLINE.length}`,
  );
}
if (wordCount < MIN_WORDS || wordCount > MAX_WORDS) {
  throw new Error(
    `tagline must be ${MIN_WORDS}-${MAX_WORDS} words, got ${wordCount}`,
  );
}
if (
  TAGLINE.trim() !== TAGLINE ||
  TAGLINE.includes("\n") ||
  /\s{2,}/.test(TAGLINE)
) {
  throw new Error(
    "tagline must be a single line with no leading/trailing or doubled whitespace",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
console.log(`wrote ${TAGLINE.length} chars to /output/entry.txt`);
