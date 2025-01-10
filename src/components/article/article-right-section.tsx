import { Ratings } from "@/components/ui/ratings";
import React from "react";
import HorizantalLine from "../ui/horizantal-line";
import { Button } from "../ui/button";

const ArticleRightSection = () => {
  return (
    <div className="flex w-full flex-col gap-5 font-sans sm:w-1/2">
      <div className="font-chrakraPatch flex w-full items-center justify-start gap-1 font-semibold text-green-700">
        MIG
      </div>
      <div className="font-chrakraPatch text-main font-bold uppercase text-black">
        ACCESCOSRIES
      </div>

      <div className="flex gap-3">
        <Ratings variant="yellow" rating={3} />
        <div className="font-bold text-black">3</div>
        <div>{`(400)`}</div>
      </div>

      <div className="flex gap-2">
        <div className="font-semibold text-black">$199</div>
        <div className="text-red-600">Save 25% or $111</div>
      </div>

      {/* description  */}
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
        accusamus quae praesentium facere nulla ad, sint quis enim nostrum
        quibusdam aperiam at vero tempore maxime provident voluptate atque
        beatae. Suscipit.
      </div>

      <HorizantalLine />

      {/* Options Section  */}

      {/* ADD TO CART SECTION    */}
      <div className="bg-bgLightGray flex w-full flex-col items-start justify-start gap-4 rounded-xl p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-chrakraPatch text-main font-semibold text-black">
            $1,999 AUD
          </h2>
          <div className="flex gap-1">
            <div className="font-semibold">199</div>
            <div className="text-red-500">Save 25% or $111</div>
          </div>
        </div>

        <div>or $27.75/month with 36-month financing*, before trade-in</div>

        <Button
          variant={"customButton"}
          className="font-chrakraPatch w-full py-4 text-white"
        >
          ADD TO CART
        </Button>
      </div>

      <HorizantalLine />
      <div>Estimated dispatch with 2-days Free Shipping</div>
      <HorizantalLine />
      <div>15-days return policy</div>
      <HorizantalLine />
      <div>Global support</div>
      <HorizantalLine />
      <div>Ways to pay</div>
    </div>
  );
};

export default ArticleRightSection;
