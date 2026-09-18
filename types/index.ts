export interface ProductVariant {
  name: string;
  options: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  images: string[];
  description: string;
  shortDescription: string;
  features: string[];
  specifications: Record<string, string>;
  price: number;
  salePrice?: number;
  rating: number;
  reviews: number;
  stock: number;
  badge?: string;
  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  sku: string;
  variants?: ProductVariant[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface HeroSlide {
  id: string;
  image: string;
  eyebrow?: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  location: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ProductSection {
  id: string;
  title: string;
  categorySlug: string;
  viewMoreLink: string;
}

export interface PromoBanner {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  name: string;
  email?: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verified: boolean;
  helpful: number;
  image?: string;
}

export interface RatingBreakdown {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
}

export interface EditorialCollection {
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
}
