"use client";

import { Navbar } from "@/components/navbar/navbar";
import { SearchOverlay } from "@/components/navbar/search-bar";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { utilityBarMessage } from "@/data/homepage";
import { useState } from "react";

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="border-b border-border bg-muted/70">
        <p className="px-4 py-2 text-center text-[11px] font-medium tracking-[0.08em] text-foreground/80">
          {utilityBarMessage}
        </p>
      </div>
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
    </div>
  );
}
