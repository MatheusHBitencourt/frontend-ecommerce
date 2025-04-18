import {
  CreateProductDetails,
  ProductDetails,
  UpdateProductDetails,
} from "./interfaces/product-details.interface";

const baseUrl = "http://localhost:3000/product-detail";

export async function updateProductDetails(
  productCode: number,
  updateData: UpdateProductDetails
): Promise<ProductDetails | null> {
  try {
    const response = await fetch(`${baseUrl}/${productCode}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      console.error("Failed to update product:", response.statusText);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  }
}

export async function getProductDetailsByCode(
  code: number
): Promise<ProductDetails | undefined> {
  try {
    const response = await fetch(`${baseUrl}/${code}`);

    if (!response.ok) {
      console.error("Failed to get product detail");
    }

    const contentLength = response.headers.get("content-length");

    if (parseInt(contentLength!) === 0) {
      return undefined;
    }

    return response.json();
  } catch (error) {
    console.error("fail to get detail", error);
  }
}
