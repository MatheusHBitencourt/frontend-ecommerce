"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useProduct} from "../use-product";
import {useEffect, useState} from "react";
import {useCurrentUser} from "@/app/auth/hooks/use-current-user";
import {useRouter} from "next/navigation";

export default function CreateProductView() {
  const router = useRouter();
  const {data: user, isLoading} = useCurrentUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login");
    }
  }, [isLoading, user, router]);

  const {
    name,
    price,
    description,
    image,
    setName,
    setPrice,
    setDescription,
    setImage,
    addProduct,
  } = useProduct();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Novo Produto</h1>
      <form onSubmit={addProduct} className="space-y-4 max-w-md">
        <Input
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Preço"
          type="number"
          value={price}
          onChange={(e) => setPrice(+parseFloat(e.target.value).toFixed(2))}
        />
        <Input
          placeholder="Descricao"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Input type="file" accept="image/*" onChange={handleImageChange} />

        {image && (
          <img
            src={image}
            alt="Preview"
            className="w-full h-48 object-cover rounded border"
          />
        )}
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  );
}
