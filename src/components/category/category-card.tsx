import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductsList } from "@/lib/types/products-types";

const BASE_URL = process.env.NEXT_PUBLIC_DIRECTUS_FILE_API;

const CategoryCard: React.FC<ProductsList> = (product) => {
  return (
    <div className="max-w-sm rounded-lg bg-white">
      <a href="#">
        {product.image && product.image[0] && (
          <Image
            className="rounded-t-lg"
            src={`${BASE_URL}${product.image[0].directus_files_id}`}
            alt=""
            width={500}
            height={500}
          />
        )}
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-mainSmall font-bold uppercase">
            {product.name}{" "}
          </h5>
        </a>
        <p className="mb-3 font-sans text-gray-700">{product.description}</p>

        <Button variant={"customButton"} asChild className="w-full py-2">
          <Link
            href="/#"
            className="text-mainSmall font-semibold uppercase text-white"
          >
            add to cart
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
