import React from "react";
import CategoryClientComponent from "@/components/category/category-section";
import {
  fetchAllCategoriesData,
  fetchAllProductsData,
} from "@/lib/apis/product-apis";

export default async function CategoryPage() {
  const allCategories = await fetchAllCategoriesData();
  const allProducts = await fetchAllProductsData();

  return (
    <CategoryClientComponent
      initialCategories={allCategories}
      initialProducts={allProducts}
    />
  );
}
