import {
  CartItem,
  CreateCartItem,
  UpdateCartItem,
} from "./interfaces/cart-item.interfaces";

export async function createCartItem(
  cartItem: Partial<CreateCartItem>
): Promise<CartItem | null> {
  const cart: CreateCartItem = {
    shoppingCartId: cartItem.shoppingCartId!,
    productId: cartItem.productId!,
    quantity: 1,
    unitPrice: cartItem.unitPrice!,
    totalPrice: cartItem.unitPrice!,
  };

  try {
    const response = await fetch("http://localhost:3000/cart-item", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      console.error("Failed to create product:", response.statusText);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
}

export async function updateCartItem(
  cartItemId: string,
  updateData: UpdateCartItem
): Promise<CartItem | null> {
  try {
    const response = await fetch(
      `http://localhost:3000/cart-item/${cartItemId}`,
      {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updateData),
      }
    );

    if (!response.ok) {
      console.error("Failed to update product:", response.statusText);
      return null;
    }

    const updatedCartItem: CartItem = await response.json();

    return updatedCartItem;
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  }
}

export async function deleteCartItem(cartItemId: string): Promise<boolean> {
  try {
    const response = await fetch(
      `http://localhost:3000/cart-item/${cartItemId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      console.error("Failed to delete product:", response.statusText);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
}
