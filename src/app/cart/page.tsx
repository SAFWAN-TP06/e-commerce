'use client'
import useClient from '@/hook/useClient'
import { useCart } from '@mrvautin/react-shoppingcart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { storageUrl } from '../utlis/baseUrl'

const CartPage = () => {
    const { items, updateItemQuantity, removeItem, totalItemsAmount } = useCart()
    console.log("item::::", items)
    const client = useClient();
    if (!client) {
        return;
    }
    return (
        <div className='p-[1rem] min:h-[70vh] py-40'>
            <div className="flex flex-col lg:grid lg:grid-cols-6 px-5 md:px-8 lg:px-5 xl:px-10 gap-10 lg:gap-3 xl:gap-5 pt-5">
                <div className="lg:col-span-4">
                    <div className='w-full flex overflow-x-auto'>
                        <table className='border-separate border-spacing-y-4 shrink-0 w-full'>
                            <thead className='bg-slate-100 shrink-0 w-full'>
                                <tr className='text-center xl:text-[1.1rem] font-semibold'>
                                    <td className='w-10 p-8'></td>
                                    <td className='py-4 pr-4'>Product</td>
                                    <td>Price</td>
                                    <td className='pl-2'>Quantity</td>
                                    <td className='pl-2'>Subtotal</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((products, i) => (
                                    <tr key={i} className='text-center shrink-0'>
                                        <td className='relative w-32 h-16 md:h-36'><Image src={storageUrl+ products.image} className='object-cover' alt="" fill /></td>
                                        <td>{products.title}</td>
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
                <div className="lg:col-span-2 bg-gray-100 rounded-2xl p-5 md:px-10 h-fit items-center">
                    <div className="text-center text-[1rem] md:text-[1.8rem] font-bold pb-5 md:pb-8">Cart Total</div>
                    <div className='flex justify-between items-center lg:pt-2 xl:pt-2'>
                        <div className='text-[0.8rem] md:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.4rem] md:pb-3 font-semibold'>Total</div>
                        <div className='text-[0.8rem] md:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.4rem] md:pb-3 font-semibold'>{totalItemsAmount}</div>
                    </div>
                    <div className='text-center pt-3 lg:pt-10 md:pb-3'>
                        <Link href="/checkout">
                            <button className="text-[0.7rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem] border-2 px-3 py-2 md:px-8 md:py-3 lg:px-5 xl:px-8 lg:py-2 xl:py-2  rounded-xl">
                                Check Out
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage