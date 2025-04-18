export interface CartItem {
  id: string;
  shoppingCartId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  createdAt: string;
  updatedAt?: string;
  product?: any[];
}

export interface CreateCartItem {
  shoppingCartId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface UpdateCartItem {
  quantity: number;
  unitPrice: number;
}

export interface CartViewProps {
  initialCart: CartItem[];
}
