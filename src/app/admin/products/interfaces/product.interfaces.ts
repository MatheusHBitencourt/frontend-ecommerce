export interface Product {
  id: string;
  name: string;
  code: number;
  price: number;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateProduct {
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface UpdateProduct {
  name?: string;
  price?: number;
  description?: string;
  image?: string;
}
