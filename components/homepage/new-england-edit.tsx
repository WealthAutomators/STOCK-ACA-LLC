"use client";

import Image from "next/image";
import Link from "next/link";
import { newEnglandEdit } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function NewEnglandEdit() {
  const products = getProductsBySlugs(newEnglandEdit.productSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
          <div className="relative min-h-[420px] overflow-hidden bg-muted lg:min-h-[640px]">
            <Image
              src={newEnglandEdit.image}
              alt={newEnglandEdit.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-card px-6 py-10 sm:px-10 lg:px-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {newEnglandEdit.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {newEnglandEdit.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {newEnglandEdit.description}
            </p>
            <Button asChild size="lg" className="mt-8 w-fit">
              <Link href={newEnglandEdit.ctaLink}>{newEnglandEdit.ctaText}</Link>
            </Button>
            <ul className="mt-10 grid grid-cols-2 gap-4">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.slug}`} className="group block">
                    <div className="relative mb-3 aspect-[4/5] overflow-hidden bg-muted">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="200px"
                      />
                    </div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(product.salePrice ?? product.price)}</p>
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
