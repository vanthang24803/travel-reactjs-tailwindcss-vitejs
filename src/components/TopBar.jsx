import React from 'react'
import { AiFillPhone , AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from 'react-icons/bs';

const TopBar = () => {
    return (
        <nav className='flex justify-between items-center px-4 py-2'>
            <div className="flex items-center">
                <BsChatSquareDots size={30} className='text-[#5651e5] mr-2'/>
                <h1 className='uppercase text-xl font-bold text-gray-700 '>Travel</h1>
            </div>
            <div className="flex">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle size={30} className='mr-2 text-[#5651e5]' />
                    <p className='text-sm text-gray-700'>9AM - 12PM</p>
                </div>
                <div className="hidden md:flex items-center px-6">
                    <AiFillPhone  size={30} className='mr-2 text-[#5651e5]' /> 
                    <p className='text-sm text-gray-700'>222-333-4444</p>
                </div>
                <button className=''>Get a Free Quote</button>
            </div>
        </nav>
    )
}

export default TopBar
