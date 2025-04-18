import {
  CreateProduct,
  Product,
  UpdateProduct,
} from "./interfaces/product.interfaces";

const baseUrl = "http://localhost:3000/product";

export async function getProductById(productId: string): Promise<Product> {
  const res = await fetch(`${baseUrl}/${productId}`);

  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function createProduct(
  product: CreateProduct
): Promise<Product | null> {
  try {
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      console.error("Failed to create product:", response.statusText);
      return null;
    }
    const createdProduct: Product = await response.json();
    return createdProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
}

export async function updateProduct(
  productId: string,
  updateData: UpdateProduct
): Promise<Product | null> {
  try {
    const response = await fetch(`${baseUrl}/${productId}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      console.error("Failed to update product:", response.statusText);
      return null;
    }
    const updatedProduct: Product = await response.json();
    return updatedProduct;
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  }
}

export async function deleteProduct(productId: string): Promise<boolean> {
  try {
    const response = await fetch(`${baseUrl}/${productId}`, {
      method: "DELETE",
    });

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
