"use client";
import {createOrder} from "@/app/api/orders/order.repository";
import {useState} from "react";

export interface Order {
  userId: string;
  items: Object[];
  total: number;
  status?: string;
  data: string;
}

export function useCheckout(cartItem: any[], userId: string) {
  const [orderSummary, setOrderSummary] = useState<any | null>(null);

  const addOrder = async () => {
    const order = {
      userId,
      items: cartItem,
      total: cartItem.reduce(
        (sum, item) => sum + item.unitPrice * item.quantity,
        0
      ),
    };

    await createOrder(order);

    setOrderSummary(order);
    alert("✅ Pedido finalizado com sucesso!");
  };

  return {addOrder, orderSummary};
}
