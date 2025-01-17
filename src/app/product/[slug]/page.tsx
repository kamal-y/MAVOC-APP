import React from "react";
import { MdNavigateNext } from "react-icons/md";
import ArticleLeftSection from "@/components/article/article-left-section";
import ArticleRightSection from "@/components/article/article-right-section";
import { fetchCurrentProductsData } from "@/lib/apis/directus query/product-apis";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const currentProductData = await fetchCurrentProductsData(slug);

  return (
    <div className="w-full bg-white text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 md:p-6 md:py-16">
        <div className="flex w-full items-center justify-start gap-1">
          <div>Consumables</div>
          <MdNavigateNext />
          <div>MIG</div>
          <MdNavigateNext />
          <div>{currentProductData?.name}</div>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row">
          <ArticleLeftSection productImageList={currentProductData.image} />
          <ArticleRightSection {...currentProductData} />
        </div>
      </div>
    </div>
  );
}
