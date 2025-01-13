import React from "react";
import CategoryClientComponent from "@/components/category/category-section";
import {
  fetchAllCategoriesData,
  fetchAllProductsData,
} from "@/lib/apis/product-apis";
// import { fetchProducts } from "@/lib/apis/medusa query";

export default async function CategoryPage() {
  const allCategories = await fetchAllCategoriesData();
  const allProducts = await fetchAllProductsData();

  // const data = await fetchProducts();
  // console.log("object data-->", data);

  return (
    <CategoryClientComponent
      initialCategories={allCategories}
      initialProducts={allProducts}
    />
  );
}
