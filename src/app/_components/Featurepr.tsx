import Featured from "@/components/cards/Featured";
import React from "react";
import img1 from "@public/images/perfume1.jpeg" 
import img2 from "@public/images/perfume2.jpeg" 
import img3 from "@public/images/perfume3.jpeg" 
import img4 from "@public/images/perfume4.jpeg" 
import img5 from "@public/images/perfume5.jpeg" 
import img6 from "@public/images/perfume6.jpeg" 
import img7 from "@public/images/perfume7.jpeg" 
import img8 from "@public/images/perfume8.jpeg" 

const perfumes = [
  {
    image: img1,
    text: {
      heading: "HELMUT LANG",
      description: "A liquid mixture of fragrant essential",
      price: 27.61
    }
  },
  {
    image: img2,
    text: {
      heading: "SAUVEG",
      description: "A liquid mixture of fragrant essential",
      price: 27.61
    }
  },
  {
    image: img3,
    text: {
      heading: "CREED",
      description: "A liquid mixture of fragrant essential",
      price: 27.61
    }
  },
  {
    image: img4,
    text: {
      heading: "AZZAROO ",
      description: "A liquid mixture of fragrant essential",
      price: 27.61
    }
  },
  {
    image: img5,
    text: {
      heading: "TERRE DERMES",
      description: "A liquid mixture of fragrant essential",
      price: 27.61
    }
  },
  {
    image: img6,
    text: {
      heading: "MOKE UP",
      description: "A liquid mixture of fragrant essential",
      price: 27.61
    }
  },
  {
    image: img7,
    text: {
      heading: "COCO",
      description: "A liquid mixture of fragrant essential",
      price: 27.61
    }
  },
  {
    image: img8,
    text: {
      heading: "JOHN VARVATOS",
      description: "A liquid mixture of fragrant essential",
      price: 27.61
    }
  },
];

const Featurepr = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-[40px] pb-5">Featured Products</h2>
      <h4 className="text-[20px] pb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit..</h4>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
       { perfumes.map((items, i)=>
        <Featured key={i} description={items.text.description} heading={items.text.heading} price={items.text.price} image={items.image}/>
        )}
      </div>

    </div>
  );
};

export default Featurepr;
