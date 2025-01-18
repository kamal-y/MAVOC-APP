export interface ImageType {
  id: string;
  url: string;
}

export interface medusaProductType {
  id: string;
  title: string;
  description: string;
  handle: string;
  variants: Array<{
    title: string;
    sku: string;
    price: number;
    calculated_price: {
      calculated_amount: number;
    };
  }>;
  images: Array<ImageType>;
}
