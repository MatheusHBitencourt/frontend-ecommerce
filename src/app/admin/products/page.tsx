import {getProductsFromShop} from "@/app/product-shop/product-shop.repository";
import AdminProductView from "./admin-product.view";

export default async function AdminProductPage() {
  const products = await getProductsFromShop();

  return <AdminProductView products={products} />;
}
