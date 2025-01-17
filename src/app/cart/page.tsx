'use client'
import useClient from '@/hook/useClient'
import { useCart } from '@mrvautin/react-shoppingcart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const { items, updateItemQuantity, removeItem, totalItemsAmount } = useCart()
    console.log("item::::", items)
    const client = useClient();
    if (!client) {
        return;
    }
    return (
        <div className='p-[7.649rem] py-40'>
            <div className="flex flex-col lg:grid lg:grid-cols-6 px-8 lg:px-5 xl:px-10 gap-5 lg:gap-3 xl:gap-5 pt-5">
                <div className="lg:col-span-4">
                    <div className='w-full flex overflow-x-auto'>
                        <table className='border-separate border-spacing-y-4 shrink-0 w-full'>
                            <thead className='bg-slate-100 shrink-0 w-full'>
                                <tr className='text-center'>
                                    <td className='w-32'></td>
                                    <td className='py-4'>Product</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Subtotal</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((products, i) => (
                                    <tr key={i} className='text-center shrink-0'>
                                        <td className='relative w-32 h-16 md:h-36'><Image src={products.images.at(0)} className='object-cover' alt="" fill /></td>
                                        <td>{products.category}</td>
                                        <td>{Math.round(products.price)}</td>
                                        <td>
                                            <button onClick={() => updateItemQuantity(products, 'increase', 1)}>+</button>
                                            {products.quantity}
                                            <button onClick={() => updateItemQuantity(products, 'decrease', 1)}>-</button></td>
                                        <td>{Math.round(products.itemTotal!)}</td>
                                        <td><button onClick={() => removeItem(products)} className='text-blue-600'>Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="lg:col-span-2 bg-gray-100 rounded-2xl p-5 md:px-10 h-[12rem] md:h-[17rem]">
                    <div className="text-center text-[1rem] md:text-[1.8rem] font-bold pb-5 md:pb-8">Cart Total</div>
                    <div className='flex justify-between items-center'>
                        <div className='text-[0.8rem] md:text-[1.2rem] md:pb-3 font-bold'>Total</div>
                        <div>{totalItemsAmount}</div>
                    </div>
                    <div className='text-center pt-3 md:pt-0 lg:pt-3 xl:pt-10 md:pb-3'>
                        <Link href="/checkout">
                            <button className="text-[0.7rem] md:text-[1rem] border-2 px-3 py-2 md:px-8 md:py-3 lg:px-5 xl:px-8 lg:py-2  xl:py-5  rounded-xl">
                                Check Out
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page