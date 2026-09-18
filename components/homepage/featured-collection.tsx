"use client";

import { featuredCollection, homepageFeaturedSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";

export function FeaturedCollection() {
  const products = getProductsBySlugs(homepageFeaturedSlugs);

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected"
          title={featuredCollection.title}
          subtitle={featuredCollection.description}
          viewMoreLink="/shop"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
