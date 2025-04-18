"use client";

import {useCurrentUser} from "@/app/auth/hooks/use-current-user";
import {useProduct} from "./use-product";
import {useEffect, useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import Link from "next/link";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

interface ProductViewProps {
  products: any;
}

export default function AdminProductView({products}: ProductViewProps) {
  const {data: user, isLoading} = useCurrentUser();
  const router = useRouter();
  const {removeProduct} = useProduct();
  const [isPending] = useTransition();
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login");
    }
  }, [isLoading, user, router]);

  const handleRemove = async (productId: string) => {
    const removed = await removeProduct(productId);
    if (removed) {
      setProductList((prev: {id: string}[]) =>
        prev.filter((p) => p.id !== productId)
      );
      toast.success("Produto removido com sucesso!");
    } else {
      toast.error("Erro ao remover produto");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="flex ml-auto mr-5 mt-4">
        <Button
          onClick={() => {
            router.push("/admin/products/create");
          }}
          variant="default"
          className="ml-auto"
        >
          Cadastrar produto
        </Button>
      </section>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.map((product: any) => (
              <Card key={product.id} className="p-4 overflow-hidden">
                <CardHeader className="p-0">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-full object-cover rounded-t-lg"
                    />
                  )}
                </CardHeader>
                <CardContent className="px-4 py-2">
                  <h3 className="text-xl font-semibold text-black truncate">
                    {product.name}
                  </h3>

                  <p className="text-gray-600">${product.price.toFixed(2)}</p>

                  <div className="flex flex-col gap-2 mt-5">
                    <Button
                      onClick={() =>
                        router.push(`/admin/products/edit/${product.id}`)
                      }
                      variant="default"
                    >
                      Editar Produto
                    </Button>

                    <Button
                      variant="destructive"
                      disabled={isPending}
                      onClick={() => handleRemove(product.id)}
                    >
                      {isPending ? "Removendo..." : "Remover Produto"}
                    </Button>

                    <Link
                      href={`/admin/products/details/edit/${product.id}`}
                      className="text-sm text-center hover:underline text-black"
                    >
                      Editar Detalhes
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
