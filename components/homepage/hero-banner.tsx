"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden md:min-h-[88vh]">
      <Image
        src={slide.image}
        alt={slide.headline}
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-foreground/10" />
      <Container className="relative flex min-h-[78vh] items-end pb-14 pt-28 md:min-h-[88vh] md:pb-20">
        <motion.div
          className="max-w-2xl text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {slide.eyebrow && (
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary-foreground/90">
              {slide.eyebrow}
            </p>
          )}
          <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/90 md:text-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-card">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
