'use client'
import type { AppProps } from "next/app";
import { CartProvider } from "@mrvautin/react-shoppingcart";
import { ReactNode } from "react";

type Props = {
  children:ReactNode;
};

export default function Providercart({ children }: Props){
  return (
    <CartProvider>
        {children}
    </CartProvider>
  );
}
