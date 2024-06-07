import React from 'react'

export const Footer = () => {
  return (

    <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center'>
      <div className='flex'>
        <div>
        <img className='rounded-xl' src="https://coachingwood.in/img/logo.png" width="300px" />
        <div className='text-xl text-white mt-2  rounded-md text-2xl font-medium'>Coaching Wood</div>
        </div>
        
        <div className='m-auto text-white'>
             <div className='text-white text-4xl font-medium px-3'>Important Link</div>
                    <div className='flex m-1 p-1 px-3 cursor-pointer  rounded-md px-3 py-2 text-sm font-medium'><span className='px-1'>Home</span></div>
                    <div className='flex m-1 p-1 px-3 cursor-pointer  rounded-md px-3 py-2 text-sm font-medium'><span className='px-1'>Services</span></div>
                    <div className='flex m-1 p-1 px-3 cursor-pointer  rounded-md px-3 py-2 text-sm font-medium'><span className='px-1'>About</span></div>
                    <div className='flex m-1 p-1 px-3 cursor-pointer  rounded-md px-3 py-2 text-sm font-medium'><span className='px-1'>Contact</span></div>
        </div>

      </div>
      <div className='font-bold'>Copyright @ www.coachingwood.in 2024-2025 </div>
    </div>


  )
}
