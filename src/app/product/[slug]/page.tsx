import React from "react";
import { MdNavigateNext } from "react-icons/md";
import ArticleLeftSection from "@/components/article/article-left-section";
import ArticleRightSection from "@/components/article/article-right-section";
import {
  fetchProductBySlugInMedusa,
  fetchRegions,
} from "@/lib/apis/medusa query";
import { medusaProductType } from "@/lib/types/medusa-product-types";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const region = await fetchRegions(); // for the price of the varient

  const medusaProductData: medusaProductType = await fetchProductBySlugInMedusa(
    slug,
    region.id,
  );

  if (!medusaProductData) {
    throw new Error(`Product not found for slug: ${slug}`);
  }

  return (
    <div className="w-full bg-white text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 md:p-6 md:py-16">
        <div className="flex w-full items-center justify-start gap-1">
          <div>Consumables</div>
          <MdNavigateNext />
          <div>MIG</div>
          <MdNavigateNext />
          <div className="font-semibold">{medusaProductData?.title}</div>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row">
          <ArticleLeftSection productImageList={medusaProductData?.images} />
          <ArticleRightSection medusaProductData={medusaProductData} />
        </div>
      </div>
    </div>
  );
}
