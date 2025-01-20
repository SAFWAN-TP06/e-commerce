'use client'
import useClient from '@/hook/useClient';
import { useCart } from '@mrvautin/react-shoppingcart'
import React from 'react'

const Billing = () => {
    const {totalShippingAmount, totalItemsAmount, cartTotal} = useCart();
    const client = useClient();
    if(!client){
        return;
    }
    return (
        <div>
            <div className="">
                <div className='flex flex-col gap-5 bg-slate-100 p-14 rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <div className="text-[1.8rem] pb-2">Product</div>
                        <div className="text-[1.8rem] pb-2">CartTotal</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-[1.1rem]'>Shipping</div>
                        <div className="text-right text-[1.1rem]">{totalShippingAmount}</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-[1.1rem]'>Total</div>
                        <div className="text-right text-[1.1rem]">{totalItemsAmount}</div>
                    </div>
                    <div className='flex justify-between items-center pt-5'>
                        <div className='text-[1.1rem] font-semibold'>Cart Total</div>
                        <div className="text-right text-[1.1rem] font-semibold">{cartTotal}</div>
                    </div>

                </div>
                <div className="flex flex-col gap-3">
                </div>
            </div>
        </div>
    )
}

export default Billing