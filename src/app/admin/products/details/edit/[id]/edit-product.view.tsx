"use client";

import {useCurrentUser} from "@/app/auth/hooks/use-current-user";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {toast} from "sonner";
import {ProductDetailsViewProps} from "../../interfaces/product-details.interface";
import {useProductDetails} from "../../use-product-details";

export default function EditProductDetailsView({
  productDetails,
}: ProductDetailsViewProps) {
  const router = useRouter();
  const {data: user, isLoading} = useCurrentUser();

  useEffect(() => {
    if ((!isLoading && !user) || !user.isAdmin) {
      router.push("/auth/login");
    }
  }, [isLoading, user, router]);

  const {
    origin,
    label,
    dimensions,
    version,
    weight,
    color,
    material,
    setOrigin,
    setLabel,
    setDimensions,
    setVersion,
    setWeight,
    setColor,
    setMaterial,
    editProductDetails,
  } = useProductDetails(productDetails);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProductDetails();

    toast.success("Produto atualizado com sucesso!");
    router.push("/admin/products");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Editar detalhes do Produto</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <Input
          placeholder="Origem"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <Input
          placeholder="Marca"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <Input
          placeholder="Dimensões"
          value={dimensions}
          onChange={(e) => setDimensions(e.target.value)}
        />
        <Input
          placeholder="Versão"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        />
        <Input
          placeholder="Peso"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Input
          placeholder="Cor"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Input
          placeholder="Material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />
        <Button type="submit">Atualizar</Button>
      </form>
    </div>
  );
}
