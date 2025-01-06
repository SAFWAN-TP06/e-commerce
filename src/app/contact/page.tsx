import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-[7.469rem]">
      <div className="relative h-screen">
        <Image
          className="object-cover absolute"
          src="/images/xxx3.jpeg"
          alt=""
          fill
        />
      <div className="flex flex-col items-center">
        <div className="absolute text-center text-white pt-60 text-xl">
            <div>CONTACT US</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores modi in, repudiandae quia natus </div>
            <div>laborum eum ratione magnam provident repellat tempore quaerat. Itaque iusto porro perferendis ut praesentium mollitia!</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
