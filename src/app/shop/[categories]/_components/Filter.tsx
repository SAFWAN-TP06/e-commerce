'use client'
import React, { useState } from 'react'

const Filter = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='relative pb-5'>
        <button onClick={() => setOpen(!open)} className="end-0 bg-black/75 text-white px-6 py-2 rounded-lg ">Filter</button>
        {
            open &&(
                <div className='absolute right-0 w-44 bg-black/55 rounded-2xl z-50 text-white'>
                    <div onClick={() => setOpen(!open)} className='p-5'>Sort by Name</div>
                    <div onClick={() => setOpen(!open)} className='p-5'>Sort by Price</div>
                </div>
            )
        }
    </div>
  )
}

export default Filter