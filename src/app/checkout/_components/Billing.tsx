import React from 'react'

const Billing = () => {
    return (
        <div>
            <div className="">
                <div>
                    <div className='flex justify-between items-center'>
                        <div className="font-bold text-[1.5rem] pb-2">Product</div>
                        <div className="font-bold text-[1.5rem] pb-2">CartTotal</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>Shipping</div>
                        <div className="text-right">100</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>Subtotal</div>
                        <div className="text-right">50</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>Total</div>
                        <div className="text-right">0</div>
                    </div>

                </div>
                <div className="flex flex-col gap-3">
                </div>
            </div>
        </div>
    )
}

export default Billing