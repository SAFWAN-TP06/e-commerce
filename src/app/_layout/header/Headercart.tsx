"use client";
import useClient from "@/hook/useClient";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import React from "react";

const Headercart = () => {
  const { totalUniqueItems } = useCart();
  const client = useClient();
  if (!client) {
    return;
  }
  return (
    <div className="relative h-18 w-6">
      <Image src="/svg/cart.svg" alt="cart-svg" fill />
      <div className="rounded-full bg-white text-black size-4 flex justify-center items-center absolute right-[-1px] top-[-8px] ">
        <p className="text-[0.55rem]">{totalUniqueItems}</p>
      </div>
    </div>
  );
};

export default Headercart;
