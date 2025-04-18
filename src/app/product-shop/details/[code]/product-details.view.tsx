"use client";

import {ProductDetailsViewProps} from "@/app/admin/products/details/interfaces/product-details.interface";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function ProductDetailsView({
  productDetails,
}: ProductDetailsViewProps) {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      {productDetails?.id ? (
        <div>
          <h1 className="text-2xl font-bold">
            Origem: {productDetails?.origin || ""}
          </h1>
          <p className="text-lg text-gray-600">
            Marca: {productDetails?.label || ""}
          </p>
          <p className="text-lg text-gray-600">
            Dimensões: {productDetails?.dimensions || ""}
          </p>
          <p className="text-lg text-gray-600">
            Versão: {productDetails?.version || ""}
          </p>
          <p className="text-lg text-gray-600">
            Peso: {productDetails?.weight || ""}
          </p>
          <p className="text-lg text-gray-600">
            Cor: {productDetails?.color || ""}
          </p>
          <p className="text-lg text-gray-600">
            Material: {productDetails?.material || ""}
          </p>
          <p className="text-lg text-gray-600">
            Data de criação: {productDetails?.createdAt || ""}
          </p>
          <p className="text-lg text-gray-600">
            Data de atualização: {productDetails?.updatedAt || ""}
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
        <h1>Detalhes nao encontrados</h1>
      )}
    </div>
  );
}
