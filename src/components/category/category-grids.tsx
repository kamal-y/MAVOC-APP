import React from "react";
import CategoryCard from "./category-card";

const CategoryGridSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 13 }).map((_, index) => (
        <CategoryCard key={index} />
      ))}
    </div>
  );
};

export default CategoryGridSection;
