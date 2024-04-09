"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
  cartItemId: number;
  quantity: number;
}

interface ICartContext {
  items: CartItem[];
  addToCart: (productId: number) => void;
}

const ContextCart = createContext({} as ICartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addToCart = (productId: number) => {
    setCartItem((prev) => {
      const existingProduct = prev.some(
        (prod) => prod.cartItemId === productId
      );

      if (existingProduct) {
        return prev.map((prod) => {
          if (prod.cartItemId === productId) {
            return { ...prod, quantity: prod.quantity + 1 };
          } else {
            return prod;
          }
        });
      } else {
        return [...prev, { cartItemId: productId, quantity: 1 }];
      }
    });
  };

  return (
    <ContextCart.Provider value={{ items: cartItem, addToCart }}>
      {children}
    </ContextCart.Provider>
  );
}

export const useCart = () => useContext(ContextCart);