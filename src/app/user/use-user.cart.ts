"use client";

import { useEffect, useState } from "react";
import { getShoppingCartByUser } from "@/app/shopping-cart/shopping-cart.repository";
import { useGlobal } from "@/app/global.context";

export function useUserCart() {
  const { user, isUserReady } = useGlobal();
  const [cart, setCart] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isUserReady) return;

    const fetchCart = async () => {
      setIsLoading(true);
      const userCart = await getShoppingCartByUser(user.id);
      setCart(userCart);
      setIsLoading(false);
    };

    fetchCart();
  }, [isUserReady, user?.id]);

  return { cart, isLoading };
}
