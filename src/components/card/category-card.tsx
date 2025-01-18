"use client";
import React, { useState } from "react";
import demoImage from "@/../public/image 8.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductType } from "@/lib/types/products-types";
import useCartStore from "@/stores/cart-items-store";

const CategoryCard: React.FC<ProductType> = (product) => {
  const [addedToCart, setAddedToCart] = useState<boolean>(true);
  const { addToCart, removeCartItem } = useCartStore();

  const addToCartHandler = async () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <div className="max-w-sm rounded-lg bg-white">
      <Link href={`/product/${product.slug}`} className="hover:cursor-pointer">
        {/* {product.image && product.image[0] && (
          <Image
            className="rounded-t-lg"
            src={`${BASE_URL}${product.image[0].directus_files_id}`}
            alt=""
            width={500}
            height={500}
          />
        )} */}

        {/* REPLACING WITH DEMO IMAGE FOR TEST TESTING  */}
        <Image
          className="rounded-t-lg"
          src={demoImage}
          alt=""
          width={500}
          height={500}
        />
      </Link>
      <div className="p-5">
        <Link
          href={`/product/${product.slug}`}
          className="hover:cursor-pointer"
        >
          <h5 className="text-mainSmall font-bold uppercase">
            {product.name}{" "}
          </h5>
        </Link>
        <p className="mb-3 font-sans text-gray-700">{product.description}</p>

        {/* ADD TO CART BUTTON  */}
        <div
          className="text-mainSmall font-semibold uppercase text-white"
          onClick={() => addToCartHandler()}
        >
          {addedToCart ? (
            <Button
              variant={"customButton"}
              className="w-full py-2"
              onClick={() => addToCart(product)}
            >
              add to cart
            </Button>
          ) : (
            <Button
              variant={"destructive"}
              className="w-full bg-red-500 py-2 uppercase hover:border-red-500 hover:bg-white hover:text-red-500"
              onClick={() => removeCartItem(product.id)}
            >
              remove
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
