"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pt-[7.469rem]">
      <div className="relative h-screen">
        <Image
          className="object-cover absolute"
          src="/images/contact.jpg"
          alt=""
          fill
        />
        <div className="flex flex-col items-center">
          <div className="absolute text-center pt-60 text-xl">
            <h1 className="text-[2rem]">CONTACT US</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              maiores modi in, repudiandae quia natus lor
            </div>
            <div>
              laborum eum ratione magnam provident repellat tempore quaerat.
              Itaque iusto porro perferendis ut praesentium mollitia!
            </div>
          </div>
          <div className="absolute pt-[26rem]">
            <div className="flex text-center gap-20 bg-white/95 rounded-xl p-5">
              <div className="">
                <div>ADDRESS</div>
                <div>1908,19th Floor, Prism Tower, Business Bay</div>
                <div className="relative h-6 w-52">
                  <Image
                    className=""
                    src="/svg/location.svg"
                    alt="address"
                    fill
                  />
                </div>
              </div>
              <div className="">
                <div>CALL</div>
                <div>+971 9748567125</div>
                <div className="relative h-6 w-52">
                  <Image className="" src="/svg/phone.svg" alt="address" fill />
                </div>
              </div>
              <div className="">
                <div>EMAIL</div>
                <div>viper@ecommerce.com</div>
                <div className="relative h-6 w-52">
                  <Image className="" src="/svg/email.svg" alt="address" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
