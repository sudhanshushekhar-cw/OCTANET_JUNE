import React from 'react'
import { TiVendorAndroid } from "react-icons/ti";
import { FaGlobe } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { IoGlobe } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
export const ServiceSection = () => {
  return (
    <div className='bg-red-100 text-center p-2'>
         <div className='text-black rounded-md text-3xl font-medium underline p-4'>Services</div>
        <div className='flex justify-around mt-2'>
            <div className='bg-white rounded-2xl p-3 flex flex-col justify-center items-center w-30 m-3'>
                <div><TiVendorAndroid className='text-4xl font-bold'/></div>
                <p className='rounded-md text-xl font-medium'>App Devlopment</p>
                <p className='rounded-md text-sm font-medium p-2'>We provide free android app for coaching center by our main website. Visti our official website www.coachingwood.in</p>
                <a href='https://coachingwood.in/' class='bg-blue-500 text-white rounded-xl p-1 px-3 text-sm font-medium'>View More</a>
            </div>

            <div className='bg-white rounded-2xl p-3 flex flex-col justify-center items-center w-30 m-3'>
                <div><FaGlobe className='text-4xl font-bold'/></div>
                <p className='rounded-md text-xl font-medium'>Web Devlopment</p>
                <p className='rounded-md text-sm font-medium p-2'>We provide free websites for coaching center by our main website. Visti our official website www.coachingwood.in</p>
                <a href='https://coachingwood.in/' class='bg-blue-500 text-white rounded-xl p-1 px-3 text-sm font-medium'>View More</a>
            </div>

            <div className='bg-white rounded-2xl p-3 flex flex-col justify-center items-center w-30 m-3'>
                <div><FaTools className='text-4xl font-bold'/></div>
                <p className='rounded-md text-xl font-medium'>IT Support</p>
                <p className='rounded-md text-sm font-medium p-2'>We provide free Supports for coaching center by our main website. Visti our official website www.coachingwood.in</p>
                <a href='https://coachingwood.in/' class='bg-blue-500 text-white rounded-xl p-1 px-3 text-sm font-medium'>View More</a>
            </div>
        </div>
        <div className='flex justify-around mt-2'>
            <div className='bg-white rounded-2xl p-3 flex flex-col justify-center items-center w-30 m-3'>
                <div><FaComputer className='text-4xl font-bold'/></div>
                <p className='rounded-md text-xl font-medium'>Software Devlopment</p>
                <p className='rounded-md text-sm font-medium p-2'>We provide free computer software according to your custom requirement by our main website. Visti our official website www.coachingwood.in</p>
                <a href='https://coachingwood.in/' class='bg-blue-500 text-white rounded-xl p-1 px-3 text-sm font-medium'>View More</a>
            </div>

            <div className='bg-white rounded-2xl p-3 flex flex-col justify-center items-center w-30 m-3'>
                <div><FaHeadphones className='text-4xl font-bold'/></div>
                <p className='rounded-md text-xl font-medium'>24x7 Call Support</p>
                <p className='rounded-md text-sm font-medium p-2'>Our team is available for 24X7 day for your solution. you just contact with out it team he will help you any time. Visti our official website www.coachingwood.in</p>
                <a href='https://coachingwood.in/' class='bg-blue-500 text-white rounded-xl p-1 px-3 text-sm font-medium'>View More</a>
            </div>

            <div className='bg-white rounded-2xl p-3 flex flex-col justify-center items-center w-30 m-3'>
                <div><IoGlobe className='text-4xl font-bold'/></div>
                <p className='rounded-md text-xl font-medium'>Networking</p>
                <p className='rounded-md text-sm font-medium p-2'>We provide computer Networking Services for statups and instiutes by our main website. Visti our official website www.coachingwood.in</p>
                <a href='https://coachingwood.in/' class='bg-blue-500 text-white rounded-xl p-1 px-3 text-sm font-medium'>View More</a>
            </div>
        </div>
    </div>

  )
}
