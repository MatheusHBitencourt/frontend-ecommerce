export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export async function getProductsFromShop(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/product", {});

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}
