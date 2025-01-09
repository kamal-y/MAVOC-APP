import React from "react";
import CategoryList from "../../components/category/category-list";
import CategoryGridSection from "@/components/category/category-grids";

const categories = ["ALL", "TORCHES", "MACHINE ACCESCOSRIES"] as string[];

export default async function Category() {
  return (
    <div className="w-full bg-white text-black">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center gap-4">
        {categories.map((data, id) => {
          return <CategoryList categoryName={data} key={id} />;
        })}
      </div>
      <hr className="h-px w-full bg-gray-700" />

      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 bg-[#FAFAFA] p-4 py-8 md:p-6 md:py-16">
        <div className="flex w-full items-center justify-between">
          <div className="text-main font-bold uppercase">ACCESCOSRIES</div>
          <div className="font-sans"> sort by</div>
        </div>

        <CategoryGridSection />
      </div>
    </div>
  );
}
