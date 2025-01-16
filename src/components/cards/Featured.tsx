import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  heading?: string;
  description?: string;
  price?: number;
  id: string;
  param: string;
};
const Featured = ({ image, heading, description, price, id, param }: Props) => {
  return (
    <div className=" px-12 p-3 rounded-md shadow-md ">
      <div className="relative h-[15rem] md:h-[12rem] lg:h-[8rem] xl:h-[18rem] ">
        <Link href={`/shop/${param}/${id}`}>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover hover:scale-95"
          />
        </Link>
      </div>
      <div className="text-center text-[20px] md:text-[15px] xl:text-[20px] fond-bold">
        <h1>{heading}</h1>
        <h2 className="font-serif line-clamp-4 text-ellipsis">{description}</h2>
        <h2 className="font-semibold">${price}</h2>
      </div>
    </div>
  );
};

export default Featured;
