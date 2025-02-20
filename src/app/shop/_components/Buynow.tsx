"use client";
import useClient from "@/hook/useClient";
import { useCart } from "@mrvautin/react-shoppingcart";
import React from "react";

type Props = {
  product: {
    _id: string;
    image: string;
    price: number;
    name: string;
  };
};

const Buynow = ({ product }: Props) => {
  const { addItem, items, addShipping } = useCart();
  console.log("item:::", items);
  console.log("pro::::::",product)
  const client = useClient();
  if (!client) {
    return
  }

  const products = {
    id: product._id,
    price: product.price,
    title: product.name,
    image: product.image,

  }
  return (
    <div>
      <button
        className="bg-black text-white w-20 py-5 rounded-lg"
        onClick={() => {
          addItem(products)
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
