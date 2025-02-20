import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  // image?: StaticImageData;
  name: string;
  image: string;
  id: string;
};
const Catoo = ({ name, image, id}: Props) => {
  return (
    <Link href={`/shop/${id}`}>
      <div className="md:p-5 lg:p-2 xl:p-16 rounded-md shadow-md md:pb-8">
        <div className="relative h-[12rem] md:h-[8rem] lg:h-[10rem] xl:h-[15rem] flex justify-center items-center">
          <Image src={image} alt="" fill className="object-cover" />
          <div className="text-center text-[25px] fond-bold relative text-white">
            <h1 className="text-[1.5rem] md:text-[1.2rem] xl:text-[1.5rem]">{name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Catoo;
