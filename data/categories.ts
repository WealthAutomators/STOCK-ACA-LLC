import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Textiles, tables, and the quiet pieces a house actually uses.",
    productCount: 6
  },
  {
    id: "2",
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Tableware, brewing tools, and everyday pieces for the counter.",
    productCount: 8
  },
  {
    id: "3",
    slug: "organization",
    name: "Organization",
    image: "/categories/organization.jpg",
    description: "Baskets, boxes, and hooks that keep a house in order.",
    productCount: 4
  },
  {
    id: "4",
    slug: "lighting",
    name: "Lighting",
    image: "/categories/lighting.jpg",
    description: "Lamps with a calm, even light for rooms that stay in use.",
    productCount: 3
  },
  {
    id: "5",
    slug: "decor",
    name: "Decor",
    image: "/categories/decor.jpg",
    description: "Vases, frames, and objects that finish a room without filling it.",
    productCount: 6
  },
  {
    id: "6",
    slug: "outdoor-living",
    name: "Outdoor Living",
    image: "/categories/outdoor-living.jpg",
    description: "Garden tools, a blanket, and a mat for the step outside the door.",
    productCount: 4
  },
  {
    id: "7",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Bags, a tumbler, and a compact umbrella for a couple of days away.",
    productCount: 4
  },
  {
    id: "8",
    slug: "apparel",
    name: "Apparel",
    image: "/categories/apparel.jpg",
    description: "Layers and shirts with a lasting shape and an easy drape.",
    productCount: 4
  },
  {
    id: "9",
    slug: "accessories",
    name: "Accessories",
    image: "/categories/accessories.jpg",
    description: "Wallets, watches, and the small things that finish a day.",
    productCount: 4
  },
  {
    id: "10",
    slug: "personal-essentials",
    name: "Personal Essentials",
    image: "/categories/personal-essentials.jpg",
    description: "Soap, scent, and grooming — practical, not ceremonial.",
    productCount: 4
  },
  {
    id: "11",
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    image: "/categories/fitness-wellness.jpg",
    description: "A mat, a bottle, and recovery tools for a weekday routine.",
    productCount: 4
  },
  {
    id: "12",
    slug: "workspace",
    name: "Workspace",
    image: "/categories/workspace.jpg",
    description: "Notebooks, a stand, and a pen for a desk that stays clear.",
    productCount: 4
  },
  {
    id: "13",
    slug: "everyday-utility",
    name: "Everyday Utility",
    image: "/categories/everyday-utility.jpg",
    description: "Lights, scales, and a tote for the unremarkable work of a week.",
    productCount: 4
  },
  {
    id: "14",
    slug: "technology",
    name: "Technology",
    image: "/categories/technology.jpg",
    description: "A clock, a radio, and a reader — useful screens, not a gadget wall.",
    productCount: 3
  },
  {
    id: "15",
    slug: "gifts",
    name: "Gifts",
    image: "/categories/gifts.jpg",
    description: "Objects that are easy to wrap and glad to receive.",
    productCount: 4
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
