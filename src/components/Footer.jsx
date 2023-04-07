import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
            <div className='flex items-center m-auto justify-center'>
                <BsChatSquareDots size={30} className="text-[#5651e5]" />
                <a href="/home" className="uppercase text-3xl font-bold mx-2 cursor-pointer">Travel</a>
            </div>
            <p className='text-[14px] text-center my-4 opacity-70'>2023 &#169; <a href="https://github.com/vanthang24803" className='hover:underline'>May Nguyen .</a> All rights reserved !</p>
        </footer>
    )
}

export default Footer
