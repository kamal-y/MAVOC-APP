"use client";
import React, { useState } from "react";
import { ProductImage } from "@/lib/types/products-types";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_DIRECTUS_FILE_API;

const ArticleLeftSection = ({
  productImageList,
}: {
  productImageList: ProductImage[];
}) => {
  const [currentImage, setCurrentImage] = useState<ProductImage>(
    productImageList[0],
  );

  return (
    <div className="flex w-full flex-col gap-3 sm:w-1/2">
      <Image
        src={`${BASE_URL}${currentImage?.directus_files_id}`}
        alt=""
        width={800}
        height={400}
        className="bg-bgDarkGray"
      />
      <div className="flex gap-2">
        {productImageList.map((image) => (
          <Image
            key={image.directus_files_id}
            src={`${BASE_URL}${image.directus_files_id}`}
            alt=""
            width={100}
            height={100}
            onClick={() => setCurrentImage(image)}
            className="cursor-pointer bg-bgDarkGray"
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleLeftSection;
