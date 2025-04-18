"use client";

import {useCurrentUser} from "@/app/auth/hooks/use-current-user";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {toast} from "sonner";
import {useProduct} from "../../use-product";

export default function EditProductView({product}: any) {
  const router = useRouter();
  const {data: user, isLoading} = useCurrentUser();

  useEffect(() => {
    if ((!isLoading && !user) || !user.isAdmin) {
      router.push("/auth/login");
    }
  }, [isLoading, user, router]);

  const {
    name,
    price,
    description,
    setName,
    setPrice,
    setDescription,
    editProduct,
  } = useProduct(product);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProduct(product.id);

    toast.success("Produto atualizado com sucesso!");
    router.push("/admin/products");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <Input
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="price"
          value={price}
          type="number"
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Atualizar</Button>
      </form>
    </div>
  );
}
