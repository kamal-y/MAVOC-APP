"use client";

import React, { useState } from "react";
import CategoryList from "../../components/category/category-list";
import CategoryGridSection from "@/components/category/category-grids";
import HorizantalLine from "@/components/ui/horizantal-line";
import {
  fetchAllProductsByCategory,
  fetchAllProductsData,
} from "@/lib/apis/product-apis";
import { Category, ProductsList } from "@/lib/types/products-types";

interface Props {
  initialCategories: Category[];
  initialProducts: ProductsList[];
}

const CategoryClientComponent: React.FC<Props> = ({
  initialCategories,
  initialProducts,
}) => {
  const [allProducts, setAllProducts] = useState(initialProducts);

  const CategoryAllHandler = async () => {
    const products = await fetchAllProductsData();
    setAllProducts(products);
  };

  const CurrentCategoryDataHandler = async (CategoryId: string) => {
    const products = await fetchAllProductsByCategory(CategoryId);
    setAllProducts(products);
  };

  return (
    <div className="w-full bg-white text-black">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center gap-4">
        {/* All products button */}
        <div onClick={CategoryAllHandler} className="hover:cursor-pointer">
          <CategoryList name="all" description="" id="" />
        </div>

        {/* Category buttons */}
        {initialCategories.map((data, id) => (
          <div
            onClick={() => CurrentCategoryDataHandler(data.id)}
            key={id}
            className="hover:cursor-pointer"
          >
            <CategoryList {...data} />
          </div>
        ))}
      </div>
      <HorizantalLine />
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 bg-[#FAFAFA] p-4 py-8 md:p-6 md:py-16">
        <div className="flex w-full items-center justify-between">
          <div className="text-main font-bold uppercase">ACCESSORIES</div>
          <div className="font-sans">sort by</div>
        </div>

        <CategoryGridSection allProducts={allProducts} />
      </div>
    </div>
  );
};

export default CategoryClientComponent;
