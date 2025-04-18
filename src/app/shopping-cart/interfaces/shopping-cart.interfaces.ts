import { CartItem } from "./cart-item.interfaces";

export interface ShoppingCart {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  userId: string;
  cartItem: CartItem[];
}
