import React from "react";
import CategoryCard from "../../../components/card/category-card";
import { ProductType } from "@/lib/types/products-types";

interface CategoryGridSectionProps {
  allProducts: ProductType[];
}

const CategoryGridSection: React.FC<CategoryGridSectionProps> = ({
  allProducts,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      {allProducts?.map((product: ProductType, index: number) => (
        <CategoryCard key={index} {...product} />
      ))}
    </div>
  );
};

export default CategoryGridSection;
