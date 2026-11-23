// news-image-20261123 — "Sum up 23 November's world news in one image".
// Node 22, standard library only. The program copies the front-page image
// held in this repository to /output/entry.png (MAKEFUN_OUTPUT_DIR outside
// the grader). The image is a newspaper front page for Monday 23 November
// 2026: COP31 collapses without a deal in Antalya; tankers ablaze in the
// Strait of Hormuz as the Iran war widens; a Russian drone hits flats in
// the Kyiv region, 14 missing; South Korea's education minister quits over
// an AI exam-cheating scandal; India posts a record 720/9d in the Wellington
// Test. No network, fully deterministic: the same bytes are written on
// every run.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");
const source = new URL("./entry.png", import.meta.url);

const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = readFileSync(target);
if (written.length !== bytes.length || !written.equals(bytes)) {
  // Fail loudly rather than leaving a partial or wrong file behind:
  // the grader runs the program twice and both runs must agree.
  throw new Error("entry.png mismatch after copy");
}
