import {getProductById} from "../../../product.repository";
import {getProductDetailsByCode} from "../../product-details.repository";
import EditProductDetailsView from "./edit-product.view";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const {id} = await params;

  const product = await getProductById(id);
  const productDetails = await getProductDetailsByCode(product.code);

  return <EditProductDetailsView productDetails={productDetails} />;
}
