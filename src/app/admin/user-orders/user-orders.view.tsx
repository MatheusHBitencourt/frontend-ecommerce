"use client";

import {Card, CardHeader, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";

interface Order {
  id: string;
  status: string;
  createdAt: string;
  total: number;
  items: {
    name: string;
    quantity: number;
    product: {name: string};
  }[];
  user: {name: string};
}

interface UserOrdersViewProps {
  userOrders: Order[];
}

export function UserOrdersView({userOrders}: UserOrdersViewProps) {
  if (!userOrders?.length) {
    return (
      <p className="text-center mt-8 text-gray-500">
        Nenhum pedido encontrado.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {userOrders.map((order) => (
        <Card key={order.id}>
          <CardHeader className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{order.user.name}</h3>

              <h3 className="font-bold text-lg">Pedido #{order.id}</h3>
              <p className="text-sm text-muted-foreground">
                Realizado em{" "}
                {new Date(order.createdAt).toLocaleDateString("pt-BR")}
              </p>
            </div>
            <Badge variant="outline">{order.status}</Badge>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {order.items.map((item, idx) => (
                <li key={idx} className="flex justify-between text-sm">
                  <span>
                    {item.product.name} x{item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <div className="text-right font-medium text-sm">
              Total: R$ {order.total.toFixed(2)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
