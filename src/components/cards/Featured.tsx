import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  heading?: string;
  description?: string;
  price?: string;
  id?: string;
};
const Featured = ({ image, heading, description, price, id, }: Props) => {
  // console.log("availa::::::;;;",availability)
  return (
    <div className="px-12 p-3 rounded-md shadow-md ">
      <Link href={`/shop/product/${id}`}>
        <div className="relative h-[10rem] lg:h-[10rem] xl:h-[15rem] ">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover hover:scale-95 transition-all"
          />
        </div>
        <div className="text-center text-[1rem] fond-bold">
          <h1>{heading}</h1>
          <h2 className="font-serif line-clamp-2 lg:line-clamp-1 xl:line-clamp-3 text-ellipsis">{description}</h2>
          <h2 className="font-semibold pt-5">${price}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Featured;
