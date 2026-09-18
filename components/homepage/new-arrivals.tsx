"use client";

import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Just in"
          title="New arrivals"
          subtitle="Recently added to the shop."
          viewMoreLink="/new-arrivals"
        />
        <Carousel slidesToShow={4} className="px-8" showArrows>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
