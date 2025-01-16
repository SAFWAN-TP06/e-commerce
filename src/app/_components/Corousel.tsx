"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "@public/images/djo1.jpg";
import image2 from "@public/images/djo5.jpg";
import image3 from "@public/images/djo3.jpg";
import cn from "../utlis/tailwind";

const gallery = [
  {
    image: image1,
    text: {
      heading: "NEW YEAR OFFER FOR MEN'S",
      subheading: "30% Discount",
      description: "We know how large objects will act' but things on a small",
    },
  },
  {
    image: image2,
    text: {
      heading: "NEW YEAR OFFER FOR WOMEN'S",
      subheading: "25% Discount",
      description: "We know how large objects will act' but things on a small",
    },
  },
  {
    image: image3,
    text: {
      heading: "NEW YEAR OFFER FOR KID'S",
      subheading: "50% Discount",
      description: "We know how large objects will act' but things on a small",
    },
  },
];
const Corousel = () => {
  const [image, setImage] = useState(0);
  const totallength = gallery.length;
  const next = () => {
    if (image == totallength - 1) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  };
  const back = () => {
    if (image == 0) {
      setImage(totallength - 1);
    } else {
      setImage(image - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [image]);

  return (
    <div
      className={cn(
        "h-[23rem] md:h-[45rem] lg:h-screen relative flex items-center",
        {
          "justify-center": image == 1,
        }
      )}
    >
      <Image
        className="object-cover"
        src={gallery.at(image)!.image}
        alt="djo"
        fill
      />
      <div className="absolute flex justify-between w-full p-2 lg:p-10 text-4xl text-white z-50">
        <button onClick={back}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
      <div
        className={cn(
          "relative px-10 lg:px-32 md:px-20 text-white",
          { "text-center text-black": image == 1 },
          { "text-white": image == 0 }
        )}
      >
        <p className="md:text-[25px] ">{gallery.at(image)!.text.heading}</p>
        <p className="md:text-[50px] sm:text-[15px] font-serif">
          {gallery.at(image)!.text.subheading}
        </p>
        <p className="font-bold md:text-xl s:text-[15px]">
          {gallery.at(image)!.text.description}
        </p>
        <br />
        <button
          className={cn(
            "bg-blue-300 rounded-lg font-bold hover:border text-black p-[0.5rem] text-[0.75rem] md:text-lg ",
            { "bg-white text-black": image == 0 },
            { "bg-black text-white": image == 1 },
            { "bg-black text-white": image == 2 }
          )}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Corousel;
