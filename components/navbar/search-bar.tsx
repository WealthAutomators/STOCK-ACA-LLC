"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Input } from "@/components/ui/input";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchResults = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 6) : [];

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSearchQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <button type="button" className="absolute inset-0 bg-foreground/40" aria-label="Close search" onClick={onClose} />
      <div className="relative mx-auto mt-0 w-full max-w-2xl border-b border-border bg-background px-4 py-6 sm:mt-20 sm:border sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Search</p>
          <button type="button" onClick={onClose} aria-label="Close search" className="flex h-11 w-11 items-center justify-center">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search home, kitchen, travel..."
              className="h-12 pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
          </div>
        </form>

        {searchQuery.trim().length > 0 && (
          <div className="mt-4">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/product/${product.slug}`}
                      className="flex items-center gap-3 px-1 py-2.5 hover:bg-muted"
                      onClick={onClose}
                    >
                      <div className="relative h-14 w-12 shrink-0 overflow-hidden bg-muted">
                        <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="48px" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.shortDescription}</p>
                        <p className="mt-0.5 text-sm">{formatPrice(product.salePrice ?? product.price)}</p>
                      </div>
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    className="w-full px-1 py-3 text-left text-xs font-medium uppercase tracking-[0.14em] text-foreground"
                    onClick={() => {
                      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                      onClose();
                    }}
                  >
                    View all results
                  </button>
                </li>
              </ul>
            ) : (
              <p className="px-1 py-4 text-sm text-muted-foreground">
                No products found for &quot;{searchQuery}&quot;.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function SearchBar() {
  return null;
}
