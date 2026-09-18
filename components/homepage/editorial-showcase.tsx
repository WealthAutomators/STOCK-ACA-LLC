"use client";

import Image from "next/image";
import Link from "next/link";
import { editorialShowcase } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function EditorialShowcase() {
  const products = getProductsBySlugs(editorialShowcase.productSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted sm:aspect-[5/4] lg:col-span-7 lg:aspect-auto lg:min-h-[680px]">
            <Image
              src={editorialShowcase.image}
              alt={editorialShowcase.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {editorialShowcase.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {editorialShowcase.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{editorialShowcase.description}</p>
            <Button asChild size="lg" className="mt-8">
              <Link href={editorialShowcase.ctaLink}>{editorialShowcase.ctaText}</Link>
            </Button>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden bg-muted sm:block">
              <Image
                src={editorialShowcase.secondaryImage}
                alt="A contemporary kitchen with natural materials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <ul className="mt-8 space-y-4 border-t border-border pt-6">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.slug}`} className="flex gap-4">
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-muted">
                      <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="64px" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.shortDescription}</p>
                      <p className="mt-1 text-sm">{formatPrice(product.salePrice ?? product.price)}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
