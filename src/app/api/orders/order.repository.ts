export async function createOrder(order: any) {
  const response = await fetch("http://localhost:3000/order", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(order),
  });

  return response.json();
}

export async function updateOrderStatus(id: string, status: string) {
  const response = await fetch(
    `http://localhost:3000/order/${id}?status=${status}`,
    {method: "PUT"}
  );

  return response.json();
}

export async function getOrders() {
  const response = await fetch(`http://localhost:3000/order`);

  return response.json();
}

export async function getOrdersByUserId(userId: string) {
  const response = await fetch(`http://localhost:3000/order/${userId}`);

  return response.json();
}
