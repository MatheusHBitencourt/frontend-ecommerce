"use client";

import {AddToCartButton} from "@/app/product-shop/components/add-to-cart-button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {toast} from "sonner";

interface ProductViewProps {
  products: any[];
  cartId: string;
}

export default function ProductView({products, cartId}: ProductViewProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-full object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className="h-48 w-full bg-gray-100 rounded-t-lg" />
                  )}
                </CardHeader>

                <CardContent className="px-4 py-2">
                  <CardTitle className="text-md font-semibold mb-2 truncate">
                    {product.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                </CardContent>

                <CardFooter className="px-4 py-2 flex justify-between">
                  <AddToCartButton
                    cartId={cartId}
                    productId={product.id}
                    unitPrice={product.price}
                    onSuccess={() =>
                      toast.success("Adicionado ao carrinho", {duration: 1100})
                    }
                  />
                  <Link
                    href={`/product-shop/details/${product.code}`}
                    className="text-sm hover:underline truncate"
                  >
                    Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} E‑Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
