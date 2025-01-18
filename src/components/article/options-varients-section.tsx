"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import IncrementDecrementCounter from "../card/card-counter-inc-dec";

interface OptionsVarientsSectionTypes {
  varients: Array<{
    title: string;
    sku: string;
    calculated_price: {
      calculated_amount: number;
    };
  }>;
}

const OptionsVarientsSection: React.FC<OptionsVarientsSectionTypes> = ({
  varients,
}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex w-full flex-col gap-2">
      {varients.map((data, index) => (
        <div
          key={index}
          className="flex w-full justify-between rounded-[12px] border border-slate-800 p-3 font-semibold"
        >
          <div className="flex w-full items-center justify-between px-3 font-chrakraPatch uppercase text-black">
            <div>{data.title}</div>
            <div className="font-bold">
              ${data.calculated_price?.calculated_amount} AUD
            </div>
          </div>

          {count === 0 ? (
            <Button
              variant={"customButton"}
              className="text-white"
              onClick={() => setCount(count + 1)}
            >
              ADD TO CART
            </Button>
          ) : (
            <div className="w-32">
              <IncrementDecrementCounter />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OptionsVarientsSection;
