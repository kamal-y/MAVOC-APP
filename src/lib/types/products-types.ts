export interface ProductImage {
  id: number;
  directus_files_id: string;
}

export interface ProductType {
  id: string;
  is_available: boolean;
  name: string;
  price: string;
  description: string;
  category: string;
  slug: string;
  image?: ProductImage[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export type CategoryList = Category[];
