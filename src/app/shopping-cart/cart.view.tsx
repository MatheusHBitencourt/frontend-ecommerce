"use client";

import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {CartItem, CartViewProps} from "./interfaces/cart-item.interfaces";
import {useCart} from "./use-cart";

export function CartView({initialCart}: CartViewProps) {
  const {cartItems, total, updateQuantity, removeItem} = useCart(initialCart);
  const router = useRouter();

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p className="text-gray-600">Your cart is empty.</p>

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
        <div className="space-y-6">
          {cartItems.map((item: CartItem) => (
            <Card
              key={item.id}
              className="flex flex-col sm:flex-row items-center p-4"
            >
              <Image
                src={(item as any).product.image}
                alt={(item as any).product.name}
                width={128}
                height={128}
                className="w-full sm:w-32 h-32 object-cover rounded mb-4 sm:mb-0 sm:mr-6"
              />
              <div className="flex-1 w-full">
                <h2 className="text-xl font-semibold text-black">
                  {(item as any).product.name}
                </h2>
                <div className="mt-2 flex items-center gap-2">
                  <Label htmlFor={`qty-${item.id}`}>Quantity:</Label>
                  <Input
                    id={`qty-${item.id}`}
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        parseInt(e.target.value),
                        item.unitPrice
                      )
                    }
                    className="w-20"
                  />
                </div>
                <p className="text-gray-600 mt-2">
                  Subtotal: ${(item.unitPrice * item.quantity).toFixed(2)}
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-red-500 mt-4 sm:mt-0"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </Card>
          ))}

          <div className="text-right text-xl font-semibold text-gray-800">
            Total: ${total.toFixed(2)}
          </div>

          <div className="text-right">
            <Button
              className="mx-2 bg-yellow-700"
              onClick={() => {
                router.push("/");
              }}
            >
              Voltar a loja
            </Button>

            <Button
              className="mx-2 bg-green-900"
              onClick={() => {
                router.push("/shopping-cart/checkout");
              }}
            >
              Ir ao checkout
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
