export const dynamic = "force-dynamic";
import {getOrders} from "@/app/api/orders/order.repository";
import {UserOrdersView} from "./user-orders.view";

export default async function UserOrdersPage() {
  const usersOrders = await getOrders();

  return <UserOrdersView userOrders={usersOrders} />;
}
