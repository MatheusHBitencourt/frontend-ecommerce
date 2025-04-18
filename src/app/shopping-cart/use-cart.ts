"use client";

import {useState} from "react";
import {CartItem} from "./interfaces/cart-item.interfaces";
import {deleteCartItem, updateCartItem} from "./cart-item.repository";

export function useCart(initialCart: CartItem[]) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart || []);

  const updateQuantity = async (
    id: string,
    quantity: number,
    unitPrice: number
  ) => {
    await updateCartItem(id, {quantity, unitPrice});

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? {...item, quantity: Math.max(1, quantity)} : item
      )
    );
  };

  const removeItem = async (id: string) => {
    await deleteCartItem(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  return {
    cartItems,
    total,
    updateQuantity,
    removeItem,
  };
}
