import { NavLink } from "@/types";
import { categories } from "./categories";

export const navigationLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  {
    label: "Categories",
    href: "/categories",
    children: categories.map((c) => ({
      label: c.name,
      href: `/categories/${c.slug}`,
    })),
  },
  { label: "New Arrivals", href: "/new-arrivals" },
  {
    label: "Collections",
    href: "/categories",
    children: [
      { label: "Home", href: "/categories/home" },
      { label: "Kitchen & Dining", href: "/categories/kitchen-dining" },
      { label: "Outdoor Living", href: "/categories/outdoor-living" },
      { label: "Travel", href: "/categories/travel" },
      { label: "Apparel", href: "/categories/apparel" },
      { label: "Gifts", href: "/categories/gifts" },
    ],
  },
];

export const footerLinks = {
  shop: [
    { label: "Shop All", href: "/shop" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Collections", href: "/categories" },
  ],
  collections: [
    { label: "Home", href: "/categories/home" },
    { label: "Kitchen & Dining", href: "/categories/kitchen-dining" },
    { label: "Travel", href: "/categories/travel" },
    { label: "Apparel", href: "/categories/apparel" },
    { label: "Gifts", href: "/categories/gifts" },
  ],
  customer: [
    { label: "Account", href: "/profile" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Track Order", href: "/track-order" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
