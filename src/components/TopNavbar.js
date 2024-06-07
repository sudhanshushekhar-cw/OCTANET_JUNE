import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaWebAwesome } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

export const TopNavbar = () => {
    return (
        <div>
            <div className='TopNavbar flex bg-black fixed w-[100%]'>
                <div className='flex px-2'>
                    <img className="w-[53px] mx-3" src='https://coachingwood.in/img/logo.png'></img>
                    <div className='text-xl text-white mt-2  rounded-md text-xl font-medium'>Coaching Wood</div>
                </div>
                
                <div className='flex justify-center m-auto text-white'>
                    <div className='flex m-1 p-1 px-3 cursor-pointer  rounded-md px-3 py-2 text-sm font-medium'><IoMdHome className='' /> <span className='px-1'>Home</span></div>
                    <div className='flex m-1 p-1 px-3 cursor-pointer  rounded-md px-3 py-2 text-sm font-medium'><FaTools /> <span className='px-1'>Services</span></div>
                    <div className='flex m-1 p-1 px-3 cursor-pointer  rounded-md px-3 py-2 text-sm font-medium'><FaWebAwesome /> <span className='px-1'>About</span></div>
                    <div className='flex m-1 p-1 px-3 cursor-pointer  rounded-md px-3 py-2 text-sm font-medium'><FaHeadphones /> <span className='px-1'>Contact</span></div>
                </div>
            </div>
        </div>
    )
}
