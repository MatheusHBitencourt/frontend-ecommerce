export interface ProductDetails {
  id: string;
  origin?: string;
  label?: string;
  dimensions?: string;
  version?: string;
  weight?: string;
  color?: string;
  material?: string;
  createdAt: string;
  updatedAt?: string;
  productCode: number;
}

export interface CreateProductDetails {
  origin?: string;
  label?: string;
  dimensions?: string;
  version?: string;
  weight?: string;
  color?: string;
  material?: string;
  productCode: number;
}

export interface UpdateProductDetails {
  origin?: string;
  label?: string;
  dimensions?: string;
  version?: string;
  weight?: string;
  color?: string;
  material?: string;
}

export interface ProductDetailProps {
  params: {
    code: number;
  };
}

export interface ProductDetailsViewProps {
  productDetails?: ProductDetails;
}

export interface ProductDetailsUpdateViewProps {
  productDetails: UpdateProductDetails;
}
