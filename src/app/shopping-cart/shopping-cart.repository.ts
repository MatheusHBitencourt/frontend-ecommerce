import {ShoppingCart} from "./interfaces/shopping-cart.interfaces";

const baseUrl = "http://localhost:3000/shopping-cart";

export async function getShoppingCartByUser(
  userId: string
): Promise<ShoppingCart> {
  const response = await fetch(`${baseUrl}/user/${userId}`);

  if (!response.ok) throw new Error("Failed to fetch shopping cart");

  return response.json();
}
