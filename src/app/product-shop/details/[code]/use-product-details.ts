"use client";

import {ProductDetails} from "@/app/admin/products/details/interfaces/product-details.interface";
import {getProductDetailsByCode} from "@/app/admin/products/details/product-details.repository";
import {useState} from "react";

export function productDetail() {
  const [details, setDetails] = useState<ProductDetails>();

  const getDetails = async (code: number) => {
    const details = await getProductDetailsByCode(code);

    setDetails(details);
  };

  return {
    details,
    getDetails,
  };
}
