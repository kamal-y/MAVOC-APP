"use client";
import useCartStore from "@/stores/cart-items-store";
import React from "react";
import { BsCart } from "react-icons/bs";

const CartIcon: React.FC = () => {
  const { cartItems } = useCartStore();

  return (
    <div className="relative">
      {/* Cart Icon */}
      <BsCart className="h-6 w-6 font-bold" aria-label="Cart" />

      {cartItems.length != 0 && (
        <div className="text-xs absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-mainGreen font-semibold text-white">
          {cartItems.length}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
