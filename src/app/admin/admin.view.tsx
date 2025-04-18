"use client";

import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {useRouter} from "next/navigation";

export default function AdminView() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card className="p-6 flex flex-col items-center text-center space-y-4 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Pedidos de Clientes
          </h2>
          <p className="text-sm text-gray-600">
            Veja e gerencie todos os pedidos feitos pelos usuários.
          </p>
          <Button onClick={() => router.push("/admin/user-orders/")}>
            Acessar Pedidos
          </Button>
        </Card>

        <Card className="p-6 flex flex-col items-center text-center space-y-4 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Gerenciamento de Produtos
          </h2>
          <p className="text-sm text-gray-600">
            Adicione, edite e remova produtos do catálogo da loja.
          </p>
          <Button onClick={() => router.push("/admin/products")}>
            Gerenciar Produtos
          </Button>
        </Card>
      </div>
    </main>
  );
}
