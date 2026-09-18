"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { getEffectivePrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";
import { cn } from "@/lib/utils";

function variantLabel(selected?: Record<string, string>) {
  if (!selected) return null;
  const values = Object.values(selected).filter(Boolean);
  return values.length ? values.join(" · ") : null;
}

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, subtotal, itemCount, isCartOpen, closeCart } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div
      className={cn("fixed inset-0 z-[70]", isCartOpen ? "pointer-events-auto" : "pointer-events-none")}
      aria-hidden={!isCartOpen}
      inert={!isCartOpen}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        tabIndex={isCartOpen ? 0 : -1}
        className={cn(
          "absolute inset-0 bg-foreground/40 transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0"
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border bg-card transition-transform duration-300 ease-out",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Cart</p>
            <h2 className="font-serif text-2xl font-medium">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </h2>
          </div>
          <Button variant="ghost" size="icon" onClick={closeCart} aria-label="Close cart">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              <Button asChild className="mt-6">
                <Link href="/shop" onClick={closeCart}>
                  Continue shopping
                </Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => {
                const variants = variantLabel(item.selectedVariants);
                return (
                  <li
                    key={`${item.product.id}-${variants ?? "default"}`}
                    className="flex gap-4 border-b border-border pb-5 last:border-0"
                  >
                    <Link
                      href={`/product/${item.product.slug}`}
                      onClick={closeCart}
                      className="relative h-24 w-20 shrink-0 overflow-hidden bg-muted"
                    >
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/product/${item.product.slug}`}
                            onClick={closeCart}
                            className="text-sm font-medium leading-snug hover:underline"
                          >
                            {item.product.name}
                          </Link>
                          {variants && <p className="mt-1 text-xs text-muted-foreground">{variants}</p>}
                          <p className="mt-1 text-sm">{formatPrice(getEffectivePrice(item.product))}</p>
                        </div>
                        <button
                          type="button"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                          onClick={() => removeFromCart(item.product.id, item.selectedVariants)}
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-3">
                        <QuantitySelector
                          quantity={item.quantity}
                          onChange={(q) => updateQuantity(item.product.id, q, item.selectedVariants)}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border bg-background px-5 py-5">
            {remaining > 0 ? (
              <p className="mb-3 text-xs text-muted-foreground">
                Add {formatPrice(remaining)} more for complimentary shipping.
              </p>
            ) : (
              <p className="mb-3 text-xs text-muted-foreground">Your order ships free.</p>
            )}
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="uppercase tracking-[0.14em] text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <Button asChild size="lg" className="w-full">
              <Link href="/checkout" onClick={closeCart}>
                Checkout
              </Link>
            </Button>
            <Button asChild variant="ghost" className="mt-2 w-full">
              <Link href="/cart" onClick={closeCart}>
                View cart
              </Link>
            </Button>
          </div>
        )}
      </aside>
    </div>
  );
}
