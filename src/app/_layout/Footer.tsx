import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between px-20 py-7 font-bold bg-slate-200'>
                <div className='text-[20px] py-16'>E commerce</div>
                <div className='py-12'>
                    <div className='text-center'>Links</div>
                    <div className='flex gap-3 font-light'>
                        <Link href=""><div>Login</div></Link>
                        <Link href="" ><div>Contact</div></Link>
                        <Link href=""><div>Shop</div></Link>
                    </div>
                </div>
                <div>
                    <div className='text-center'>Get in Touch:</div>
                    <div className='font-light flex flex-col gap-3'>
                        <div>Address: Fort Road Kannur</div>
                        <div>Phone: +971 7015489578</div>
                        <div>Mail: knr@fake.com</div>
                        <div className='flex gap-3'>
                            <div className='relative h-10 w-8'>
                                <Link href=".."><Image src="/svg/fb.svg" alt="" fill /></Link>
                            </div>
                            <div className='relative h-10 w-8'>
                                <Link href=".."><Image src="/svg/x.svg" alt="" fill /></Link>
                            </div>
                            <div className='relative h-10 w-8'>
                                <Link href=".."><Image src="/svg/insta.svg" alt="" fill /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center font-bold m-5'>
                <h4>Powered by VIPER</h4>
            </div>

        </div>
    )
}

export default Footer