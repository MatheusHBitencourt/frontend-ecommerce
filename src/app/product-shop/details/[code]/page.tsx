import {ProductDetailProps} from "@/app/admin/products/details/interfaces/product-details.interface";
import {getProductDetailsByCode} from "@/app/admin/products/details/product-details.repository";
import ProductDetailsView from "./product-details.view";

export default async function ProductDetailsPage({
  params,
}: {
  params: {code: string};
}) {
  const receivedProps = await params;
  const code = receivedProps.code;

  const productDetails = await getProductDetailsByCode(+code);

  return <ProductDetailsView productDetails={productDetails} />;
}
