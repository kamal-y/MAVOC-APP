import React from "react";
import productLogo from "@/../public/Frame 48095745.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <div className="max-w-sm rounded-lg bg-white">
      <a href="#">
        <Image className="rounded-t-lg" src={productLogo} alt="" width={500} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-mainSmall font-bold uppercase">36 mig torch </h5>
        </a>
        <p className="mb-3 font-sans text-gray-700">
          Velit velit amet lacus a sem felis. Blandit hendrerit imperdiet turpis
          purus
        </p>

        <Button variant={"customButton"} asChild className="w-full py-2">
          <Link
            href="/category"
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
