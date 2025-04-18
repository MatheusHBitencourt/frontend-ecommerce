"use client";

import {createCartItem} from "@/app/shopping-cart/cart-item.repository";
import {Button} from "@/components/ui/button";
import React from "react";

interface AddToCartButtonProps {
  cartId: string;
  productId: string;
  unitPrice: number;
  onSuccess: () => void;
}

export function AddToCartButton({
  cartId,
  productId,
  unitPrice,
  onSuccess,
}: AddToCartButtonProps) {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    await createCartItem({shoppingCartId: cartId, productId, unitPrice});
    setLoading(false);
    onSuccess();
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      className="px-3 py-1 bg-orange-500 text-white rounded disabled:opacity-50"
    >
      {loading ? "..." : "Adicionar"}
    </Button>
  );
}
