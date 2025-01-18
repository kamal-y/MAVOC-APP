"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageType } from "@/lib/types/medusa-product-types";

interface ArticleLeftSectionProps {
  productImageList?: ImageType[];
}

const ArticleLeftSection: React.FC<ArticleLeftSectionProps> = ({
  productImageList,
}) => {
  const [currentImage, setCurrentImage] = useState<ImageType | null>(
    productImageList && productImageList.length > 0
      ? { id: "0", url: productImageList[0].url }
      : ({} as ImageType),
  );

  return (
    <div className="flex w-full flex-col gap-3 sm:w-1/2">
      <div className="h-45 w-full">
        {/* Main Image to Show  */}
        <Image
          src={`${currentImage?.url}`}
          alt=""
          width={800}
          height={400}
          className="bg-bgDarkGray"
        />
      </div>

      {/* other images of current product to toggle  */}
      <div className="flex gap-2">
        {productImageList?.map((image) => (
          <Image
            key={image.id}
            src={`${image.url}`}
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
