import React, { useState } from "react";
import { Button } from "../ui/button";
import useCartStore from "@/stores/cart-items-store";
import { ProductType } from "@/lib/types/products-types";

const IncrementDecrementCounter: React.FC<ProductType> = (product) => {
  const [count, setCount] = useState<number>(0);
  const { removeCartItem, updateQuantity } = useCartStore();

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
    updateQuantity(product.id);
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
    removeCartItem(product.id);
  }

  return (
    <div className="flex items-center justify-between text-mainSmall font-semibold uppercase text-white">
      <Button variant={"customButton"} onClick={decrement}>
        -
      </Button>
      <div className="text-black">{count}</div>
      <Button variant={"customButton"} onClick={increment}>
        +
      </Button>
    </div>
  );
};

export default IncrementDecrementCounter;
