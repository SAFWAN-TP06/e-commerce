import React from "react";
import img1 from "@public/images/djo5.jpg";
import Featured from "@/components/cards/Featured";
import Filter from "./_components/Filter";

const products = [
  {
    image: img1,
    text: {
      heading: "HELMUT LANG",
      description: "A liquid mixture of fragrant essential",
      price: 27.61,
    },
  },
  {
    image: img1,
    text: {
      heading: "SAUVEG",
      description: "A liquid mixture of fragrant essential",
      price: 27.61,
    },
  },
  {
    image: img1,
    text: {
      heading: "CREED",
      description: "A liquid mixture of fragrant essential",
      price: 27.61,
    },
  },
  {
    image: img1,
    text: {
      heading: "AZZAROO ",
      description: "A liquid mixture of fragrant essential",
      price: 27.61,
    },
  },
  {
    image: img1,
    text: {
      heading: "TERRE DERMES",
      description: "A liquid mixture of fragrant essential",
      price: 27.61,
    },
  },
  {
    image: img1,
    text: {
      heading: "MOKE UP",
      description: "A liquid mixture of fragrant essential",
      price: 27.61,
    },
  },
  {
    image: img1,
    text: {
      heading: "COCO",
      description: "A liquid mixture of fragrant essential",
      price: 27.61,
    },
  },
  {
    image: img1,
    text: {
      heading: "JOHN VARVATOS",
      description: "A liquid mixture of fragrant essential",
      price: 27.61,
    },
  },
];

const page = async ({
  params,
}: {
  params: Promise<{ categories: string }>;
}) => {
  const param = (await params).categories
  console.log("param:::", param)
  const jam = await fetch(
    `https://dummyjson.com/products/category/${param}`
  );
  const productdynamic = await jam.json();
  // console.log("jam:::::", productdynamic);
  return (
    <div className="p-[7.649rem] text-center flex flex-col items-center">
      <h2 className="text-[40px]">Products</h2>
      <div className="flex justify-between pb-5 text-[1.2rem]">
        <h1 className="text-black/75 text-[1.2rem]">Products</h1>
        <Filter />
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap-5 lg:gap-5 xl:gap-20 justify-center">
        {productdynamic.products.map((items: any, i: number) => (
          <Featured
            param={param}
            id={items.id}
            key={i}
            description={items.description}
            heading={items.title}
            price={items.price}
            image={items.images.at(0)}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
