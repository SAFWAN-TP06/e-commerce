import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-5 md:px-16 items-center py-10 fixed z-[80] bg-black/70 w-[100%] shadow-xl">
      <div className="text-white text-[1.3rem] md:text-[1.5625rem] font-bold">E-COMMERCE</div>
      <div className="flex gap-5 md:gap-24 font-bold text-white">
        <div className="hidden md:flex gap-24 ">
             <Link href="/" className="">
               HOME
             </Link>
             <Link href="" className="">
               SHOP
             </Link>
             <Link href="" className="">
               ABOUT
             </Link>
             <Link href="contact" className="">
               CONTACT
             </Link>
        </div>
        <Link href="" className="">
          LOGIN
        </Link>
        <div className="relative h-18 w-6">
          <Image src="/svg/cart.svg" alt="cart-svg" fill />
          <div className="rounded-full bg-white text-black size-4 flex justify-center items-center absolute right-[-1px] top-[-8px] ">
            <p className="text-[0.55rem]">0</p>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
