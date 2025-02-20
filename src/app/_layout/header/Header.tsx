'use client'
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Headercart from "./Headercart";
import { usePathname, useRouter } from "next/navigation";


const Header = () => {

  const router = useRouter();

  const pathname = usePathname();

  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("accessToken"));
  }, [pathname])

  const handleLogout = () => {
    window.localStorage.removeItem("accessToken");
    setAccessToken(null);
    router.push("/");
    setTimeout(() => {
      router.refresh();
    }, 100);
  }

  return (
    <div className="flex justify-between px-5 md:px-5 items-center py-10 fixed z-[80] bg-black/75 w-[100%] shadow-xl ">
      <div className="text-white text-[1.3rem] md:text-[1.5625rem] font-bold">
        E-COMMERCE
      </div>
      <div className="flex gap-5 md:gap-12 lg:gap-20 font-bold text-white">
        <div className="hidden md:flex gap-12 lg:gap-20">
          <Link href="/" className="">
            HOME
          </Link>
          <Link href="shop" className="">
            SHOP
          </Link>
          <Link href="" className="">
            ABOUT
          </Link>
          <Link href="contact" className="">
            CONTACT
          </Link>
        </div>
        {accessToken ? (
          <button onClick={handleLogout}
            className="text-xs md:text-lg cursor-pointer">LOGOUT</button>) : (
          <Link href="login" className="">
            LOGIN
          </Link>
        )}
        <Sidebar />
        <Headercart />
      </div>
    </div>
  );
};

export default Header;
