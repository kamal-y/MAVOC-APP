import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductSort = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="text-main font-bold uppercase">ACCESSORIES</div>
      <div className="flex items-center justify-between gap-2 font-sans">
        <div>Sort by:</div>
        <div className="space-y-4 font-chrakraPatch font-semibold uppercase text-black">
          <Select defaultValue="recommendation">
            <SelectTrigger className="w-[200px] border-none uppercase">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="font-chrakraPatch font-medium uppercase text-black">
              <SelectItem value="recommendation">recommendation</SelectItem>
              <SelectItem value="price">price</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
