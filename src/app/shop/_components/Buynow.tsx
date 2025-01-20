"use client";
import { useCart } from "@mrvautin/react-shoppingcart";
import React from "react";

type Props = {
  product: {
    id: string;
    image: string;
    price: number;
    title: string;
  };
};

const Buynow = ({ product }: Props) => {
  const { addItem, items, addShipping } = useCart();
  console.log("item:::", items)
  return (
    <div>
      <button
        className="bg-black text-white w-20 py-5 rounded-lg"
        onClick={() => {
          addItem(product)
          addShipping({
            description: "Shipping Charge",
            cost: 15
          })
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Buynow;
