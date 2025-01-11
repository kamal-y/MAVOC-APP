import React from "react";
import CategoryCard from "./category-card";
import { ProductsList } from "@/lib/types/products-types";

interface CategoryGridSectionProps {
  allProducts: ProductsList[];
}

const CategoryGridSection: React.FC<CategoryGridSectionProps> = ({
  allProducts,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      {allProducts?.map((product: ProductsList, index: number) => (
        <CategoryCard key={index} {...product} />
      ))}
    </div>
  );
};

export default CategoryGridSection;
