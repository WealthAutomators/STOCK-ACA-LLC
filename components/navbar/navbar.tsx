"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onSearchOpen: () => void;
}

export function Navbar({ onSearchOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { itemCount, openCart } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="bg-background">
      <Container>
        <div className="grid grid-cols-3 items-center py-4 lg:py-5">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="hidden h-11 items-center gap-2 px-1 text-sm text-foreground/80 transition-colors hover:text-foreground lg:flex"
              onClick={onSearchOpen}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>

          <Link href="/" className="justify-self-center text-center">
            <span className="font-serif text-[1.65rem] font-medium leading-none tracking-[0.22em] text-foreground sm:text-[1.85rem]">
              {company.displayName}
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
              Connecticut
            </span>
          </Link>

          <div className="flex items-center justify-end gap-0.5">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              onClick={onSearchOpen}
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Link
              href="/profile"
              aria-label="Account"
              className="hidden h-11 w-11 items-center justify-center sm:flex"
            >
              <User className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative hidden h-11 w-11 items-center justify-center sm:flex"
            >
              <Heart className="h-[18px] w-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center"
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {itemCount > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <nav className="hidden justify-center border-t border-border/80 pb-3 pt-2 lg:flex">
          <ul className="flex items-center gap-1">
            {navigationLinks.map((link) => (
              <li
                key={`${link.label}-${link.href}`}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-[13px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 border border-border bg-card py-2 shadow-sm">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-[80] lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-foreground/35 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
        />
        <nav
          className={cn(
            "absolute left-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-background transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-5">
            <div>
              <p className="font-serif text-xl tracking-[0.18em]">{company.displayName}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Connecticut</p>
            </div>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center">
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-5 py-6">
            {navigationLinks.map((link) => (
              <li key={`${link.label}-${link.href}`} className="border-b border-border/70 py-4">
                <Link
                  href={link.href}
                  className="font-serif text-2xl"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="mt-3 space-y-1">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1.5 text-sm text-muted-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-6 space-y-2">
              <Link href="/profile" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                Account
              </Link>
              <Link href="/wishlist" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                Wishlist
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
