import Image from "next/image";
import React from "react";
import Buynow from "../../_components/Buynow";

const page = async ({ params }: { params: Promise<{ product: string }> }) => {
  const param = (await params).product;
  console.log("param:::", param);

  const fat = await fetch(`https://dummyjson.com/products/${param}`);
  const productdy = await fat.json();
  console.log("fat::::", productdy);
  return (
    <div className="p-[7.649rem]">
      <div className="flex">
        <div className="relative w-[400px] h-[500px]">
          <Image src={productdy.images.at(0)} alt="" fill />
        </div>
        <div className="flex flex-col px-10 gap-10">
          <h1>{productdy.title}</h1>
          <h2>Price : {productdy.price}</h2>
          <h4>Brand: {productdy.brand}</h4>
          <h3>Discount % : {productdy.discountPercentage}</h3>
          {/* <button className='bg-black text-white w-20 p-2'>Buy Now</button> */}
          <Buynow product={productdy}/>
        </div>
      </div>
    </div>
  );
};

export default page;
