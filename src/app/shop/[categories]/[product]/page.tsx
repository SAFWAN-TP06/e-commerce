import Image from "next/image";
import React from "react";
import Buynow from "../../_components/Buynow";
import { frontEndHome } from "@/api/Api";
import { storageUrl } from "@/app/utlis/baseUrl";
// import Filter from "../_components/Filter";

async function singleProduct(id: string) {
  const response = await frontEndHome.singleProductApi(id)
  // console.log("response:::::::;", response)
  return response.data.data
}

const page = async ({ params }: { params: Promise<{ product: string }> }) => {
  const id = (await params).product;

  const res = await singleProduct(id);
  console.log("resss:::", res);
  const product = res;

  // const fat = await fetch(`https://dummyjson.com/products/${param}`);
  // const productdy = await fat.json();
  // console.log("fat::::", productdy);

  return (
    <div className="pt-[7.649rem] px-[7.649rem] py-[5rem]">
      <div className="flex gap-36 py-8 items-center">
        <div className="relative w-[50%] h-[45rem]">
          <Image className="object-cover shadow-xl" src={storageUrl + product.image} alt="" fill />
        </div>
        <div className="flex flex-col px-10 gap-10 pt-10 text-center">
          <h1 className="text-[2.5rem]">{product.name}</h1>
          <h2 className="text-[1.5rem] font-semibold">$ {product.price}</h2>
          <h4 className="text-[1.5rem] font-semibold">{product.brand}</h4>
          {/* <h3 className="text-[1.2rem] font-semibold">Discount % : {product.discountPercentage}</h3> */}
          {/* <button className='bg-black text-white w-20 p-2'>Buy Now</button> */}
          <Buynow product={product} />
        </div>
      </div>
    </div>
  );
};

export default page;
