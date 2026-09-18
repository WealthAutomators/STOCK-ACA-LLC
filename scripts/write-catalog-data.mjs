import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "data/_catalog-manifest.json"), "utf8"));
const PUBLIC = path.join(ROOT, "public");

const counts = {};
for (const p of manifest.products) {
  counts[p.categorySlug] = (counts[p.categorySlug] || 0) + 1;
}

const categoryMeta = {
  home: { id: "1", name: "Home", description: "Textiles, tables, and the quiet pieces a house actually uses." },
  "kitchen-dining": { id: "2", name: "Kitchen & Dining", description: "Tableware, brewing tools, and everyday pieces for the counter." },
  organization: { id: "3", name: "Organization", description: "Baskets, boxes, and hooks that keep a house in order." },
  lighting: { id: "4", name: "Lighting", description: "Lamps with a calm, even light for rooms that stay in use." },
  decor: { id: "5", name: "Decor", description: "Vases, frames, and objects that finish a room without filling it." },
  "outdoor-living": { id: "6", name: "Outdoor Living", description: "Garden tools, a blanket, and a mat for the step outside the door." },
  travel: { id: "7", name: "Travel", description: "Bags, a tumbler, and a compact umbrella for a couple of days away." },
  apparel: { id: "8", name: "Apparel", description: "Layers and shirts with a lasting shape and an easy drape." },
  accessories: { id: "9", name: "Accessories", description: "Wallets, watches, and the small things that finish a day." },
  "personal-essentials": { id: "10", name: "Personal Essentials", description: "Soap, scent, and grooming — practical, not ceremonial." },
  "fitness-wellness": { id: "11", name: "Fitness & Wellness", description: "A mat, a bottle, and recovery tools for a weekday routine." },
  workspace: { id: "12", name: "Workspace", description: "Notebooks, a stand, and a pen for a desk that stays clear." },
  "everyday-utility": { id: "13", name: "Everyday Utility", description: "Lights, scales, and a tote for the unremarkable work of a week." },
  technology: { id: "14", name: "Technology", description: "A clock, a radio, and a reader — useful screens, not a gadget wall." },
  gifts: { id: "15", name: "Gifts", description: "Objects that are easy to wrap and glad to receive." },
};

for (const [slug, meta] of Object.entries(categoryMeta)) {
  const first = manifest.products.find((p) => p.categorySlug === slug);
  if (!first) continue;
  const src = path.join(PUBLIC, first.images[0].replace(/^\//, ""));
  const destRel = `categories/${slug}.jpg`;
  const dest = path.join(PUBLIC, destRel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  meta.image = `/${destRel}`;
  meta.productCount = counts[slug] || 0;
}

function serialize(value, indent = 0) {
  const pad = "  ".repeat(indent);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    if (value.every((v) => typeof v !== "object")) {
      return `[${value.map((v) => JSON.stringify(v)).join(", ")}]`;
    }
    const inner = value.map((v) => `${pad}  ${serialize(v, indent + 1)}`).join(",\n");
    return `[\n${inner}\n${pad}]`;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value).filter(([, v]) => v !== undefined);
    const inner = entries
      .map(([k, v]) => {
        const key = /^[A-Za-z_][A-Za-z0-9_]*$/.test(k) ? k : JSON.stringify(k);
        return `${pad}  ${key}: ${serialize(v, indent + 1)}`;
      })
      .join(",\n");
    return `{\n${inner}\n${pad}}`;
  }
  return JSON.stringify(value);
}

const productsOut = manifest.products.map((p, i) => {
  const rec = {
    id: `p${i + 1}`,
    slug: p.slug,
    name: p.name,
    category: p.category,
    categorySlug: p.categorySlug,
    images: p.images,
    shortDescription: p.shortDescription,
    description: p.description,
    features: p.features,
    specifications: p.specifications,
    price: p.price,
    rating: p.rating,
    reviews: p.reviews,
    stock: p.stock,
    sku: p.sku,
  };
  if (p.salePrice) rec.salePrice = p.salePrice;
  if (p.badge) rec.badge = p.badge;
  if (p.featured) rec.featured = true;
  if (p.bestseller) rec.bestseller = true;
  if (p.newArrival) rec.newArrival = true;
  if (p.variants) rec.variants = p.variants;
  return rec;
});

const productsTs = `import { Product } from "@/types";

export const products: Product[] = ${serialize(productsOut)};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsBySlugs(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getDealProducts(): Product[] {
  return products.filter((p) => p.salePrice);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}

export function getEffectivePrice(product: Product): number {
  return product.salePrice ?? product.price;
}
`;

const categoriesTs = `import { Category } from "@/types";

export const categories: Category[] = ${serialize(
  Object.entries(categoryMeta).map(([slug, meta]) => ({
    id: meta.id,
    slug,
    name: meta.name,
    image: meta.image,
    description: meta.description,
    productCount: meta.productCount,
  }))
)};

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
`;

fs.writeFileSync(path.join(ROOT, "data/products.ts"), productsTs);
fs.writeFileSync(path.join(ROOT, "data/categories.ts"), categoriesTs);
console.log("Wrote data/products.ts and data/categories.ts");
console.log("Category images copied from first product in each category.");
