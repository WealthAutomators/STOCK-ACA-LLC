"use client";

import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";
import { CartItem, Product } from "@/types";
import { getProductById, getEffectivePrice } from "@/data/products";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { TAX_RATE, FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING } from "@/lib/constants";

interface StoredCartItem {
  productId: string;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedVariants?: Record<string, string>) => void;
  removeFromCart: (productId: string, selectedVariants?: Record<string, string>) => void;
  updateQuantity: (productId: string, quantity: number, selectedVariants?: Record<string, string>) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  isHydrated: boolean;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function variantsMatch(a?: Record<string, string>, b?: Record<string, string>) {
  const left = a ?? {};
  const right = b ?? {};
  const keys = new Set([...Object.keys(left), ...Object.keys(right)]);
  for (const key of keys) {
    if (left[key] !== right[key]) return false;
  }
  return true;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [storedItems, setStoredItems, isHydrated] = useLocalStorage<StoredCartItem[]>("stock-aca-cart", []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const items: CartItem[] = useMemo(() => {
    const next: CartItem[] = [];
    for (const item of storedItems) {
      const product = getProductById(item.productId);
      if (!product) continue;
      next.push({
        product,
        quantity: item.quantity,
        selectedVariants: item.selectedVariants,
      });
    }
    return next;
  }, [storedItems]);

  const addToCart = useCallback(
    (product: Product, quantity = 1, selectedVariants?: Record<string, string>) => {
      setStoredItems((prev) => {
        const existing = prev.find(
          (i) => i.productId === product.id && variantsMatch(i.selectedVariants, selectedVariants)
        );
        if (existing) {
          return prev.map((i) =>
            i.productId === product.id && variantsMatch(i.selectedVariants, selectedVariants)
              ? { ...i, quantity: i.quantity + quantity }
              : i
          );
        }
        return [...prev, { productId: product.id, quantity, selectedVariants }];
      });
      setIsCartOpen(true);
    },
    [setStoredItems]
  );

  const removeFromCart = useCallback(
    (productId: string, selectedVariants?: Record<string, string>) => {
      setStoredItems((prev) =>
        prev.filter((i) => !(i.productId === productId && variantsMatch(i.selectedVariants, selectedVariants)))
      );
    },
    [setStoredItems]
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number, selectedVariants?: Record<string, string>) => {
      if (quantity <= 0) {
        setStoredItems((prev) =>
          prev.filter((i) => !(i.productId === productId && variantsMatch(i.selectedVariants, selectedVariants)))
        );
        return;
      }
      setStoredItems((prev) =>
        prev.map((i) =>
          i.productId === productId && variantsMatch(i.selectedVariants, selectedVariants) ? { ...i, quantity } : i
        )
      );
    },
    [setStoredItems]
  );

  const clearCart = useCallback(() => setStoredItems([]), [setStoredItems]);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + getEffectivePrice(item.product) * item.quantity, 0),
    [items]
  );

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : STANDARD_SHIPPING;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal,
      shipping,
      tax,
      total,
      isHydrated,
      isCartOpen,
      openCart,
      closeCart,
    }),
    [items, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, subtotal, shipping, tax, total, isHydrated, isCartOpen, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
