import React from "react";
// import img1 from "@public/images/djo5.jpg";
import Featured from "@/components/cards/Featured";
import Filter from "./_components/Filter";
import { frontEndHome } from "@/api/Api";
import { storageUrl } from "@/app/utlis/baseUrl";

// const products = [
//   {
//     image: img1,
//     text: {
//       heading: "HELMUT LANG",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61,
//     },
//   },
//   {
//     image: img1,
//     text: {
//       heading: "SAUVEG",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61,
//     },
//   },
//   {
//     image: img1,
//     text: {
//       heading: "CREED",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61,
//     },
//   },
//   {
//     image: img1,
//     text: {
//       heading: "AZZAROO ",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61,
//     },
//   },
//   {
//     image: img1,
//     text: {
//       heading: "TERRE DERMES",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61,
//     },
//   },
//   {
//     image: img1,
//     text: {
//       heading: "MOKE UP",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61,
//     },
//   },
//   {
//     image: img1,
//     text: {
//       heading: "COCO",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61,
//     },
//   },
//   {
//     image: img1,
//     text: {
//       heading: "JOHN VARVATOS",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61,
//     },
//   },
// ];

async function productApi(id: string) {
  const response = await frontEndHome.productApi(id)
  console.log("response:::::::;", response)
  return response.data.data
}



const page = async ({
  params,
}: {
  params: Promise<{ categories: string }>;
}) => {
  const param = (await params).categories
  // console.log("param:::", param)
  const jam = await productApi(param);
  const productdynamic = jam;
  console.log("jam:::::", productdynamic);
  return (
    <div className="pt-[7.649rem] text-center">
      <div className="text-[1.8rem] md:text-[2rem] text-center">
        Products
      </div>
      <div className="flex justify-between text-[1rem] md:text-[1.2rem] px-12 pt-4">
        <h1 className="text-black/75 text-[1.2rem]">Products</h1>
        <Filter />
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap-5 lg:gap-5 xl:gap-20 p-10">
        {productdynamic.map((items: {
          image: string,
          name: string,
          description: string,
          price: string,
          _id: string,
          param: string,
        }, i: number) => (
          <Featured
            // param={param}
            id={items._id}
            key={i}
            description={items.description}
            heading={items.name}
            price={items.price}
            image={storageUrl + items.image}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
