"use client";

import {getShoppingCartByUser} from "./shopping-cart.repository";
import {CartView} from "./cart.view";
import {useGlobal} from "../global.context";
import {useEffect, useState} from "react";
import {ShoppingCart} from "./interfaces/shopping-cart.interfaces";

export default function CartPage() {
  const {user, isUserReady} = useGlobal();
  const [cart, setCart] = useState<ShoppingCart>();

  useEffect(() => {
    if (!isUserReady) return;

    const getCart = async () => {
      const userCart = await getShoppingCartByUser(user.id);

      setCart(userCart);
    };

    getCart();
  }, [isUserReady, setCart]);

  if (!cart) return null;

  return <CartView initialCart={cart.cartItem} />;
}
