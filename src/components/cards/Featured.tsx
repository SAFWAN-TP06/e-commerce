import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  image:StaticImageData,
  heading:string,
  description:string,
  price:number,
}
const Featured = ({image,heading,description,price}:Props) => {
  return (
        <div className=" px-12 p-3 rounded-md shadow-md">
          <div className="relative h-[25rem]">
            <Image src={image} alt="" fill className='object-cover'/>
          </div>
          <div className="text-center text-[20px] fond-bold">
            <h1>{heading}</h1>
            <h2 className="font-serif">{description}</h2>
            <h2 className="font-semibold">${price}</h2>
          </div>
        </div>
      
  )
}

export default Featured