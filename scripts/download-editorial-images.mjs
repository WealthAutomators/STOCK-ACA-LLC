/**
 * Download contemporary interior / lifestyle photos for hero and editorial banners.
 * Product imagery stays in the shared library; these are campaign photographs only.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

const TARGETS = [
  // Warm contemporary living room, natural light
  { file: "hero/hero-1.jpg", id: "photo-1600210492486-724fe5c67fb0", w: 2200 },
  // Architectural interior, plaster + wood
  { file: "banners/editorial-1.jpg", id: "photo-1616486338812-3dadae4b4ace", w: 1800 },
  // Kitchen / everyday living
  { file: "banners/editorial-2.jpg", id: "photo-1556912173-46c336c7fd55", w: 1600 },
  // Considered interior vignette
  { file: "banners/new-england-edit.jpg", id: "photo-1586023496775-813d975d5192", w: 1800 },
  // Home living room, soft light
  { file: "banners/everyday-living.jpg", id: "photo-1600566753086-00f18fb6b3ea", w: 1800 },
  // Modern house architecture
  { file: "banners/secondary.jpg", id: "photo-1600585154340-be6161a56a0c", w: 2000 },
  // Quiet interior for about
  { file: "banners/about.jpg", id: "photo-1513693902810-1b7c3ceaa280", w: 1600 },
  // Table / dining atmosphere
  { file: "banners/featured.jpg", id: "photo-1600607687939-ce8a6c25118c", w: 1800 },
];

async function download(id, width) {
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82&fm=jpg`;
  const res = await fetch(url, {
    headers: { "User-Agent": "STOCK-ACA-LLC/1.0 (editorial-images)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${id}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error(`too small (${buf.length})`);
  return buf;
}

async function main() {
  for (const t of TARGETS) {
    const dest = path.join(PUBLIC, t.file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const buf = await download(t.id, t.w);
    fs.writeFileSync(dest, buf);
    console.log(`✓ ${t.file} (${Math.round(buf.length / 1024)}kb) ← ${t.id}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
