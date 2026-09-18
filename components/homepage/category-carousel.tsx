"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { shopCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoryCarousel() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Browse"
          title="Shop by category"
          subtitle="A considered mix for the house, the table, and the rest of the week."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {shopCollections.map((collection, index) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <Link href={collection.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground sm:p-5">
                    <h3 className="font-serif text-xl sm:text-2xl">{collection.name}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
