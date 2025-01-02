import Image from 'next/image'
import React from 'react'

const Category = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-[40px] py-5'>Categories</h2>
                <h4 className='text-[20px] pb-10'>These are our Categories</h4>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-5 px-12'>
                <div className='relative col-span-1 row-span-2 w-full h-[35rem] '>
                    <Image className='rounded-lg object-cover hover:scale-95' src="/images/djo4.jpg" alt="" fill />
                    <button className='absolute bg-gradient-to-r from-black text-white p-3 rounded bottom-5 start-5'>MEN</button>
                </div>
                <div className='relative col-span-1 row-span-2 w-full '>
                    <Image className='rounded-lg object-cover hover:scale-95' src="/images/billie.jpeg" alt="" fill />
                    <button className='absolute bg-gradient-to-r from-black text-white p-3 rounded bottom-5 start-5'>WOMEN</button>

                </div>
                <div className='relative w-full col-span-1 row-span-1'>
                    <Image className='rounded-lg object-cover hover:scale-95' src="/images/shoes.jpg" alt="" fill />
                    <button className='absolute bg-gradient-to-r from-black text-white p-3 rounded bottom-5 start-5'>SHOE'S</button>

                </div>
                <div className='relative w-full col-span-1 row-span-1 '>
                    <Image className='rounded-lg object-cover hover:scale-95' src="/images/kids.jpg" alt="" fill />
                    <button className='absolute bg-gradient-to-r from-black text-white p-3 rounded bottom-5 start-5'>KID'S</button>

                </div>
            </div>
        </div>

    )
}

export default Category