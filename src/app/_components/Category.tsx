import Image from "next/image";
import React from "react";
import { storageUrl } from "../utlis/baseUrl";
import Link from "next/link";

type Props = {
  category: [
    {
      _id: string,
      name: string,
      image: string,
    }
  ]

}

const Category = ({category}: Props) => {

  return (
    <div>
      <div className="text-center">
        <h2 className="text-[1.5rem] py-5 font-bold">CATEGORIES</h2>
        <h4 className="text-[20px] pb-10">These are our Categories</h4>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 px-6 md:px-12">
        <div className="relative col-span-1 row-span-2 w-full h-[15rem] md:h-[20rem] lg:h-[30rem] ">
          <Link href={`/shop/${category.at(0)?._id}`}>
            <Image
              className="rounded-lg object-cover hover:scale-95 transition-all"
              src={storageUrl+ category.at(0)?.image}
              alt=""
              fill
            />
          </Link>
          <button className="absolute bg-gradient-to-r from-black text-white p-3 rounded bottom-5 start-5">
            {category.at(0)?.name}
          </button>
        </div>
        <div className="relative col-span-1 row-span-2 w-full h-[15rem] md:h-[20rem] lg:h-auto">
          <Link href={`/shop/${category.at(1)?._id}`}>
            <Image
              className="rounded-lg object-cover hover:scale-95 transition-all"
              src={storageUrl+ category.at(1)?.image}
              alt=""
              fill
            />
          </Link>
          <button className="absolute bg-gradient-to-r from-black text-white p-3 rounded bottom-5 start-5">
          {category.at(1)?.name}
          </button>
        </div>
        <div className="relative w-full col-span-1 row-span-1  h-[15rem] md:h-[20rem] lg:h-auto">
          <Link href={`/shop/${category.at(2)?._id}`}>
            <Image
              className="rounded-lg object-cover hover:scale-95 transition-all"
              src={storageUrl+ category.at(2)?.image}
              alt=""
              fill
            />
          </Link>
          <button className="absolute bg-gradient-to-r from-black text-white p-3 rounded bottom-5 start-5">
          {category.at(2)?.name}
          </button>
        </div>
        <div className="relative w-full col-span-1 row-span-1  h-[15rem] md:h-[20rem] lg:h-auto">
          <Link href={`/shop/${category.at(3)?._id}`}>
            <Image
              className="rounded-lg object-cover hover:scale-95 transition-all"
              src={storageUrl+ category.at(3)?.image}
              alt=""
              fill
            />
          </Link>
          <button className="absolute bg-gradient-to-r from-black text-white p-3 rounded bottom-5 start-5">
          {category.at(3)?.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
