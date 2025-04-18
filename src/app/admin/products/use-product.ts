"use client";

import {useState} from "react";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "./product.repository";

export interface Product {
  id?: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export function useProduct(product?: Product) {
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || 0.0);
  const [description, setDescription] = useState(product?.description || "");
  const [image, setImage] = useState(product?.image || "");

  const addProduct = async () => {
    const product: Product = {
      name,
      price,
      description,
      image,
    };

    const response = await createProduct(product);

    return response;
  };

  const removeProduct = async (productId: string) => {
    const response = await deleteProduct(productId);

    return response;
  };

  const editProduct = async (productId: string) => {
    const product: Product = {
      name,
      price,
      description,
    };

    const response = await updateProduct(productId, product);

    return response;
  };

  return {
    name,
    price,
    description,
    image,
    setName,
    setPrice,
    setDescription,
    setImage,
    addProduct,
    removeProduct,
    editProduct,
  };
}
