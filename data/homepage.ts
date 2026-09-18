import { Feature, HeroSlide, PromoBanner, EditorialCollection } from "@/types";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";
import { formatPrice } from "@/lib/format";
import { categories } from "@/data/categories";

export const utilityBarMessage = `Complimentary shipping on orders ${formatPrice(FREE_SHIPPING_THRESHOLD)} and above · Somers, Connecticut`;

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    eyebrow: "STOCK ACA LLC",
    headline: "Considered Goods for Modern Living",
    description:
      "A Connecticut shop of practical, well-made pieces for the house, the table, and the days in between.",
    ctaText: "Shop the collection",
    ctaLink: "/shop",
    secondaryCtaText: "New arrivals",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const shopCollections: EditorialCollection[] = categories.slice(0, 8).map((c) => ({
  slug: c.slug,
  name: c.name,
  description: c.description,
  image: c.image,
  href: `/categories/${c.slug}`,
}));

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: `Free shipping over ${formatPrice(FREE_SHIPPING_THRESHOLD)}`,
    description: "Standard delivery in 3–5 business days.",
  },
  {
    id: "2",
    icon: "rotate",
    title: "30-day returns",
    description: "Unused items, in original packaging.",
  },
  {
    id: "3",
    icon: "star",
    title: "Chosen for use",
    description: "A considered catalog, not a marketplace of everything.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "cotton-bath-towels",
  "glass-electric-kettle",
  "acetate-sunglasses",
] as const;

export const homepageFeaturedSlugs = [
  "linen-throw-blanket",
  "stoneware-dinner-plates",
  "ceramic-table-lamp",
  "canvas-weekender",
  "merino-crew-sweater",
  "walnut-side-table",
  "everyday-ceramic-mug",
  "leather-strap-watch",
] as const;

export const homepageNewArrivalSlugs = [
  "brass-wall-hooks",
  "stoneware-vase",
  "walnut-wall-clock",
  "cotton-overshirt",
  "eau-de-parfum",
  "linen-cover-notebook",
  "analog-alarm-clock",
] as const;

export const homepageBestsellerSlugs = [
  "cotton-bath-towels",
  "glass-electric-kettle",
  "everyday-ceramic-mug",
  "soy-pillar-candle",
  "canvas-weekender",
  "insulated-travel-tumbler",
  "natural-yoga-mat",
  "stoneware-dinner-plates",
] as const;

export const editorialShowcase = {
  eyebrow: "From the house",
  title: "Rooms that stay in use.",
  description:
    "A lamp beside a chair, a board on the counter, a throw where you sit in the evening. These are the pieces we return to — not because they announce themselves, but because they belong.",
  ctaText: "Shop home",
  ctaLink: "/categories/home",
  image: "/banners/editorial-1.jpg",
  secondaryImage: "/banners/editorial-2.jpg",
  productSlugs: ["ceramic-table-lamp", "oak-cutting-board", "linen-throw-blanket"] as const,
};

export const newEnglandEdit = {
  title: "The New England Edit",
  eyebrow: "A seasonal selection",
  description:
    "Wool, linen, and a bag that takes a couple of days. Chosen for the way a Connecticut household actually moves through the week — indoors, outdoors, and on the road between.",
  ctaText: "Shop the edit",
  ctaLink: "/shop",
  image: "/banners/new-england-edit.jpg",
  productSlugs: [
    "merino-crew-sweater",
    "wool-scarf",
    "linen-throw-blanket",
    "canvas-weekender",
  ] as const,
};

export const everydayLiving = {
  eyebrow: "Home & everyday living",
  title: "The weekday house.",
  description:
    "Bedding that feels washed from the first night, plates that stack, a kettle that simply boils. Practical design for rooms that are lived in, not staged.",
  ctaText: "Shop kitchen & dining",
  ctaLink: "/categories/kitchen-dining",
  image: "/banners/everyday-living.jpg",
};

export const secondaryBanner = {
  eyebrow: "Quiet architecture",
  title: "Made to sit with the house.",
  description:
    "Natural materials, unforced proportion, and a palette that belongs to plaster, wood, and stone. Nothing extra. Nothing loud.",
  ctaText: "Explore collections",
  ctaLink: "/categories",
  image: "/banners/secondary.jpg",
};

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: `Complimentary shipping from ${formatPrice(FREE_SHIPPING_THRESHOLD)}`,
  description: "Standard delivery in 3–5 business days, on us when your order reaches seventy-five.",
  buttonText: "Shop all",
  buttonLink: "/shop",
  image: "/banners/featured.jpg",
};

export const aboutSection = {
  title: "A shop for considered living.",
  description:
    "STOCK ACA LLC gathers useful things for modern households — objects with a practical kind of quality, meant to be lived with rather than displayed. From Somers, Connecticut.",
  checklist: [
    "A considered catalog, not a marketplace of everything",
    "Pieces chosen for everyday utility",
    "Home, table, travel, and gifts in one place",
    "Quiet design that holds up over time",
  ],
  buttonText: "Our approach",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Featured collection",
  description: "A few things we keep returning to.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home" },
  { label: "Kitchen", slug: "kitchen-dining" },
  { label: "Travel", slug: "travel" },
  { label: "Apparel", slug: "apparel" },
];

export const newsletter = {
  title: "Notes from the shop.",
  description: "New pieces and the occasional edit, sent only when there is something worth writing.",
  placeholder: "Your email",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
