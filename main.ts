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
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");
const source = new URL("./entry.png", import.meta.url);

const bytes = readFileSync(source);

// Guard: the entry must be a genuine 1024x1024 PNG. A PNG's IHDR chunk
// starts at byte 16 (width, big-endian uint32) and byte 20 (height).
if (bytes.length < 33 || !bytes.subarray(1, 4).equals(Buffer.from("PNG"))) {
  throw new Error("entry.png is not a PNG file");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = readFileSync(target);
if (written.length !== bytes.length || !written.equals(bytes)) {
  // Fail loudly rather than leaving a partial or wrong file behind:
  // the grader runs the program twice and both runs must agree.
  throw new Error("entry.png mismatch after copy");
}

console.log(
  `wrote ${target} (${written.length} bytes, sha256 ${createHash("sha256").update(written).digest("hex")})`,
);
