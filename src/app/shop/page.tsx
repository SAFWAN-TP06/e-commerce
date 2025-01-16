import Image from "next/image";
import React from "react";
import img1 from "@public/images/shirts.jpeg";
import img2 from "@public/images/jeans.jpeg";
import img3 from "@public/images/jacket2.jpeg";
import img4 from "@public/images/cap2.jpeg";
import img5 from "@public/images/tshirt2.jpeg";
import img6 from "@public/images/track.jpeg";
import img7 from "@public/images/shoes1.jpeg";
import img8 from "@public/images/denim.jpeg";
import Catoo from "@/components/cards/Catoo";

const categories = [
  {
    image: img1,
    heading: "Shirts",
  },
  {
    image: img2,
    heading: "Jeans",
  },
  {
    image: img3,
    heading: "jacket",
  },
  {
    image: img4,
    heading: "Hats",
  },
  {
    image: img5,
    heading: "T-Shirts",
  },
  {
    image: img6,
    heading: "Track Pants",
  },
  {
    image: img7,
    heading: "Shoes",
  },
  {
    image: img8,
    heading: "Denim",
  },
];

const page = async () => {
  const res = await fetch("https://dummyjson.com/products/category-list");
  const categorydynamic = await res.json();
  console.log("res::::::", categorydynamic);
  return (
    <div className="p-[7.649rem]">
      <div className="relative text-center">
        <h1 className="text-[40px] pb-10">Categories</h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-20">
        {categorydynamic.map((items: string, i: number) => (
          <Catoo key={i} heading={items} />
        ))}
      </div>
    </div>
  );
};

export default page;
