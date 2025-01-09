import Image from "next/image";
import React from "react";
import productLogo from "@/../public/Frame 48095745.svg";

interface CategoryListProps {
  categoryName: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ categoryName }) => {
  return (
    <div className="w-24 flex-col items-center justify-center gap-3">
      <Image src={productLogo} alt="product-logo" width={100} height={100} />

      <div className="flex-wrap text-center text-mainSmall font-bold uppercase">
        {categoryName}
      </div>
    </div>
  );
};

export default CategoryList;
