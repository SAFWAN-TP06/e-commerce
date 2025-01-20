import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image?: StaticImageData;
  heading: string;
};
const Catoo = ({ image, heading }: Props) => {
  return (
    <Link href={`/shop/${heading}`}>
      <div className="md:p-3 rounded-md shadow-md md:pb-8 bg-black/70">
        <div className="relative h-[12rem] md:h-[8rem] lg:h-[10rem] xl:h-[18rem] flex justify-center items-center">
          {/* <Image src={image} alt="" fill className="object-cover" /> */}
          <div className="text-center text-[25px] fond-bold relative text-white">
            <h1 className="text-[1.5rem] md:text-[1.2rem] xl:text-[1.5rem]">{heading}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Catoo;
