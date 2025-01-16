import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="p-[7.649rem]">
        <div className='flex'>
            <div className='relative w-[400px] h-[500px]'>
                <Image src="/images/cap.jpeg" alt="" fill/>
            </div>
            <div className='flex flex-col px-10 gap-10'>
                <h1>Cap</h1>
                <h2>$29.25</h2>
                <h3>Brand Name</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis officia quo sed fugit reprehenderit impedit.</h4>
                <button className='bg-black text-white w-20 p-2'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default page