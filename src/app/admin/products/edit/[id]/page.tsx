import {getProductById} from "../../product.repository";
import EditProductView from "./edit-product.view";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const {id} = await params;

  const product = await getProductById(id);

  return <EditProductView product={product} />;
}
