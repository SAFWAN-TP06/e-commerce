import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  heading?: string;
  description?: string;
  price?: number;
  id?: string;
  param: string;
  availability: string,
};
const Featured = ({ image, heading, description, price, id, param, availability }: Props) => {
  return (
    <div className="px-12 p-3 rounded-md shadow-md ">
      <div className="relative h-[10rem] lg:h-[10rem] xl:h-[15rem] ">
        <Link href={`/shop/${param}/${id}`}>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover hover:scale-95"
          />
        </Link>
      </div>
      <div className="text-center text-[1rem] fond-bold">
        <h1>{heading}</h1>
        <h2 className="font-serif line-clamp-2 lg:line-clamp-1 xl:line-clamp-3 text-ellipsis">{description}</h2>
        <h2 className="font-semibold pt-5">${price}</h2>
      </div>
    </div>
  );
};

export default Featured;
