import { Ratings } from "@/components/ui/ratings";
import React from "react";
import { MdNavigateNext } from "react-icons/md";

export default async function Product() {
  return (
    <div className="w-full bg-white text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 md:p-6 md:py-16">
        <div className="flex w-full items-center justify-start gap-1">
          <div>Consumables</div>
          <MdNavigateNext />
          <div>MIG</div>
          <MdNavigateNext />
          <div>36 MIG Torch</div>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-40"></div>

          <div className="flex flex-col">
            <div className="flex w-full items-center justify-start gap-1 font-semibold text-green-700">
              MIG
            </div>
            <div className="text-main font-bold uppercase text-black">
              ACCESCOSRIES
            </div>

            <div className="flex gap-1 font-sans">
              <Ratings variant="yellow" rating={3} />
              <div>3</div>
              <div>{`(400)`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
