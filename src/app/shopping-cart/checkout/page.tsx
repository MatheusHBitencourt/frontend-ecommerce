"use client";

import {useUserCart} from "@/app/user/use-user.cart";
import CheckoutView from "./checkout-view";

export default function CheckoutPage() {
  const {cart, isLoading} = useUserCart();

  if (isLoading || !cart) return null;

  return <CheckoutView initialCheckout={cart} userId={cart.userId} />;
}
