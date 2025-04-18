"use client";

import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {useRouter} from "next/navigation";
import {useCheckout} from "./use-checkout";
import Image from "next/image";

interface CheckoutProps {
  initialCheckout: any;
  userId: string;
}

export default function CheckoutView({initialCheckout, userId}: CheckoutProps) {
  const router = useRouter();

  const {addOrder, orderSummary} = useCheckout(
    initialCheckout.cartItem,
    userId
  );
  const items = initialCheckout.cartItem || [];
  const total = items.reduce(
    (sum: number, item: any) => sum + item.unitPrice * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {orderSummary ? (
        <div className="mt-8 border-t pt-4">
          <h2 className="text-2xl font-bold mb-2">🧾 Nota Fiscal</h2>
          <ul className="mt-2">
            {orderSummary.items.map((item: any, idx: number) => (
              <li key={idx}>
                {item.product.name} x{item.quantity} — R${" "}
                {(item.unitPrice * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">
            Total: R$ {orderSummary.total.toFixed(2)}
          </p>

          <div className="text-right">
            <Button
              className="mx-2 bg-yellow-700"
              onClick={() => {
                router.push("/");
              }}
            >
              Voltar a loja
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {items.map((item: any) => (
            <Card key={item.id} className="p-4 mb-4">
              <h2 className="font-bold">{item.product.name}</h2>
              <Image
                src={item.product.image}
                alt={item.product.name}
                width={128}
                height={128}
                className="w-full sm:w-32 h-32 object-cover rounded mb-4 sm:mb-0 sm:mr-6"
              />
              <p>Quantidade: {item.quantity}</p>
              <p>Preço unitário: R$ {item.unitPrice.toFixed(2)}</p>
              <p>Subtotal: R$ {(item.unitPrice * item.quantity).toFixed(2)}</p>
            </Card>
          ))}

          <div className="text-right text-xl font-bold text-gray-800 mb-4">
            Total: R$ {total.toFixed(2)}
          </div>

          <div className="text-right">
            <Button
              className="mx-2 bg-yellow-700"
              onClick={() => {
                router.push("/shopping-cart");
              }}
            >
              Voltar ao carrinho
            </Button>

            <Button className="mx-2 bg-green-900" onClick={addOrder}>
              Finalizar Pedido
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
