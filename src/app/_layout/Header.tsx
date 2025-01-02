import Image from 'next/image'
import React from 'react'

const Header = () => {
     return (
          <div className='flex justify-between px-16 items-center py-10 fixed z-[80] bg-gray-400 w-[100%] shadow-xl'>
               <div className='text-white text-[25px] font-bold'>E-COMMERCE</div>
               <div className='flex gap-24 font-bold text-white'>
                    <div className=''>HOME</div>
                    <div className=''>SHOP</div>
                    <div className=''>CONTACT</div>
                    <div className=''>LOGIN</div>
                    <div className=''>NEW</div>
                    <div className='relative h-18 w-6'>
                         <Image src="/svg/cart.svg" alt='cart-svg' fill />
                         <div className='rounded-full bg-white text-black size-4 flex justify-center items-center absolute right-[-1px] top-[-8px] '>
                              <p className='text-[0.55rem]'>0</p>
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default Header