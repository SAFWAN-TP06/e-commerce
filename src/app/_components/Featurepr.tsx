import Featured from "@/components/cards/Featured";
import React from "react";
// import img1 from "@public/images/perfume1.jpeg"
// import img2 from "@public/images/perfume2.jpeg"
// import img3 from "@public/images/perfume3.jpeg"
// import img4 from "@public/images/perfume4.jpeg"
// import img5 from "@public/images/perfume5.jpeg"
// import img6 from "@public/images/perfume6.jpeg"
// import img7 from "@public/images/perfume7.jpeg"
// import img8 from "@public/images/perfume8.jpeg"
import { storageUrl } from "../utlis/baseUrl";

// const perfumes = [
//   {
//     id: "0",
//     image: "/images/perfume1.jpeg",
//     text: {
//       heading: "HELMUT LANG",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61
//     }
//   },
//   {
//     image: "/images/perfume2.jpeg",
//     text: {
//       heading: "SAUVEG",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61
//     }
//   },
//   {
//     image: "/images/perfume3.jpeg",
//     text: {
//       heading: "CREED",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61
//     }
//   },
//   {
//     image: "/images/perfume4.jpeg",
//     text: {
//       heading: "AZZAROO ",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61
//     }
//   },
//   {
//     image: "/images/perfume5.jpeg",
//     text: {
//       heading: "TERRE DERMES",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61
//     }
//   },
//   {
//     image: "/images/perfume6.jpeg",
//     text: {
//       heading: "MOKE UP",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61
//     }
//   },
//   {
//     image: "/images/perfume7.jpeg",
//     text: {
//       heading: "COCO",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61
//     }
//   },
//   {

//     image: "/images/perfume8.jpeg",
//     text: {
//       heading: "JOHN VARVATOS",
//       description: "A liquid mixture of fragrant essential",
//       price: 27.61
//     }
//   },
// ];
type Props = {
  featurepr: [
    {
      _id: string,
      name: string,
      image: string,
      description: string,
      price: string,
    }
  ]
}

const Featurepr = ({ featurepr }: Props) => {
  console.log("ahaaaaaaa:::::::;", featurepr)
  return (
    <div className="text-center py-12 lg:px-20">
      <h2 className="text-[1.5rem] font-bold pb-5">FEATURED PRODUCTS</h2>
      <h4 className="text-[20px] pb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit..</h4>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-20">
        {featurepr.map((items, i) =>
          <Featured key={i} description={items.description} heading={items.name} price={items.price} image={storageUrl+ items.image} id={items._id}/>
        )}
      </div>

    </div>
  );
};

export default Featurepr;
