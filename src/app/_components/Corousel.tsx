'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import image1 from '@public/images/djo1.jpg'
import image2 from '@public/images/djo2.jpg'
import image3 from '@public/images/djo3.jpg'
import cn from '../utlis/tailwind'


const gallery = [
    {
        image: image1,
        text: {
            heading: "NEW YEAR OFFER FOR MEN'S",
            subheading: "30% Discount",
            description: "We know how large objects will act' but things on a small"
        }
    },
    {
        image: image2,
        text: {
            heading: "NEW YEAR OFFER FOR WOMEN'S",
            subheading: "25% Discount",
            description: "We know how large objects will act' but things on a small"
        }
    },
    {
        image: image3,
        text: {
            heading: "NEW YEAR OFFER FOR KID'S",
            subheading: "50% Discount",
            description: "We know how large objects will act' but things on a small"
        }
    },
]
const Corousel = () => {
    const [image, setImage] = useState(0);
    const totallength = gallery.length
    const next = () => {
        if (image == totallength - 1) {
            setImage(0)
        }
        else {
            (setImage(image + 1))
        }
    }
    const back = () => {
        if (image == 0) {
            setImage(totallength - 1)
        }
        else {
            (setImage(image - 1))
        }
    }

    return (
        <div className={cn('h-screen relative flex items-center', { 'justify-center': image == 1 })}>
            <Image className='object-cover' src={gallery.at(image)!.image} alt="djo" fill />
            <div className='absolute flex justify-between w-full p-10 text-4xl text-white z-50'>
                <button onClick={back}>{"<"}</button>
                <button onClick={next}>{">"}</button>
            </div>
            <div className={cn('relative px-32 text-white', { 'text-center': image == 1 },{"text-black":image == 0})}>
                <p className='text-[25px]'>{gallery.at(image)!.text.heading}</p>
                <p className='text-[50px] font-serif'>{gallery.at(image)!.text.subheading}</p>
                <p className='font-bold text-xl'>{gallery.at(image)!.text.description}</p><br />
                <button className={cn('bg-blue-300 p-3 rounded-lg font-bold text-lg hover:border text-black',{'bg-black text-white':image == 0},{'bg-black text-white':image == 2})}>SHOP NOW</button>
            </div>
        </div>
    )
}

export default Corousel