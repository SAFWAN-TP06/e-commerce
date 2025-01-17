"use client";
import useClient from "@/hook/useClient";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Headercart = () => {
  const { totalUniqueItems } = useCart();
  const client = useClient();
  if (!client) {
    return;
  }
  return (
   <Link href="/cart">
      <div className="relative h-6 w-6">
        <Image src="/svg/cart.svg" alt="cart-svg" fill />
        <div className="rounded-full bg-white text-black size-4 flex justify-center items-center absolute right-[-1px] top-[-8px] ">
          <p className="text-[0.55rem]">{totalUniqueItems}</p>
        </div>
      </div>
   </Link>
  );
};

export default Headercart;
