'use client'
import { CartProvider } from "@mrvautin/react-shoppingcart";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Providercart({ children }: Props) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
