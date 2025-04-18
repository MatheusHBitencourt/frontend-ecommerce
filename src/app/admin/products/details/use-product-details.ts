"use client";

import {useState} from "react";
import {ProductDetails} from "./interfaces/product-details.interface";
import {updateProductDetails} from "./product-details.repository";

export function useProductDetails(productDetails?: ProductDetails) {
  const [origin, setOrigin] = useState<string>(productDetails?.origin || "");
  const [label, setLabel] = useState<string>(productDetails?.label || "");
  const [dimensions, setDimensions] = useState<string>(
    productDetails?.dimensions || ""
  );
  const [version, setVersion] = useState<string>(productDetails?.version || "");
  const [weight, setWeight] = useState<string>(productDetails?.weight || "");
  const [color, setColor] = useState<string>(productDetails?.color || "");
  const [material, setMaterial] = useState<string>(
    productDetails?.material || ""
  );

  const productDetailsDetailsEditableData = {
    origin,
    label,
    dimensions,
    version,
    weight,
    color,
    material,
  };

  const editProductDetails = async () => {
    const response = await updateProductDetails(
      productDetails?.productCode!,
      productDetailsDetailsEditableData
    );

    return response;
  };

  return {
    origin,
    label,
    dimensions,
    version,
    weight,
    color,
    material,
    setOrigin,
    setLabel,
    setDimensions,
    setVersion,
    setWeight,
    setColor,
    setMaterial,
    editProductDetails,
  };
}
