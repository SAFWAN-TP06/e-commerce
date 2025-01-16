import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between px-2 md:px-16 lg:px-24 py-7 font-bold bg-black/70 items-center">
        <div className="text-[1.2rem] text-white pb-0 md:pb-36 font-bold">E-COMMERCE</div>
        <div className=" pb-0 md:pb-36">
          <div className="text-center text-white text-[1.2rem]">Links</div>
          <div className="flex gap-3 font-light">
            <Link href="">
              <div className="text-white">Login</div>
            </Link>
            <Link href="">
              <div className="text-white">Contact</div>
            </Link>
            <Link href="">
              <div className="text-white">Shop</div>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-center pb-2 text-white text-[1.2rem]">Get in Touch:</div>
          <div className="font-light flex flex-col gap-3">
            <div className="text-white">Address: Fort Road Kannur</div>
            <div className="text-white">Phone: +971 7015489578</div>
            <div className="text-white">Mail: knr@fake.com</div>
            <div className="flex gap-3 justify-center md:justify-normal">
              <div className="relative h-10 w-8">
                <Link href="..">
                  <Image src="/svg/fb.svg" alt="" fill />
                </Link>
              </div>
              <div className="relative h-10 w-8">
                <Link href="..">
                  <Image src="/svg/x.svg" alt="" fill />
                </Link>
              </div>
              <div className="relative h-10 w-8">
                <Link href="..">
                  <Image src="/svg/insta.svg" alt="" fill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-bold m-5">
        <h4>Powered by VIPER</h4>
      </div>
    </div>
  );
};

export default Footer;
