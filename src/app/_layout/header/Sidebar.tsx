"use client";
import Navbar from "@/components/svg/Navbar";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex">
      <div>
        <Navbar className="w-5 h-5" onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div className="flex fixed inset-0 w-full h-full">
          <div
            className="bg-transparent w-[50%]"
            onClick={() => setOpen(!open)}
          ></div>
          <div className="bg-blue-500  w-[50%]">
            <div className="flex flex-col gap-8 items-center pt-14">
              <Link onClick={() => setOpen(!open)} href="/" className="">
                HOME
              </Link>
              <Link href="/shop" className="">
                SHOP
              </Link>
              <Link href="" className="">
                ABOUT
              </Link>
              <Link href="/contact" className="">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
