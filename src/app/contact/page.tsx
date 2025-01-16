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
        <div className="relative flex flex-col items-center ">
          <div className=" text-center pt-60 md:text-xl">
            <h1 className="text-[2rem] font-bold">CONTACT US</h1>
            <div className="pt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              maiores modi in, repudiandae quia natus lor
            </div>
            <div>
              laborum eum ratione magnam provident repellat tempore quaerat.
              Itaque iusto porro perferendis ut praesentium mollitia!
            </div>
          </div>
          <div className="pt-[2rem] px-5">
            <div className="flex flex-col lg:flex-row text-left gap-5 lg:gap-20 bg-white/65 rounded-xl p-5">
              <div className="flex items-center">
                <div className="relative h-4 w-[3rem] shrink-0">
                  <Image
                    className=""
                    src="/svg/location.svg"
                    alt="address"
                    fill
                  />
                </div>
                <div>
                  <div>ADDRESS</div>
                  <div>1908,19th Floor, Prism Tower, Business Bay</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative h-4 w-[3rem]">
                  <Image className="" src="/svg/phone.svg" alt="address" fill />
                </div>
                <div>
                  <div>CALL</div>
                  <div>+971 9748567125</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative h-4 w-[3rem]">
                  <Image className="" src="/svg/email.svg" alt="address" fill />
                </div>
                <div>
                  <div>EMAIL</div>
                  <div>viper@ecommerce.com</div>
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
