import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
export const HeroSection = () => {
    return (
        <div className="bg-[url('https://coachingwood.in/img/header.jpg')] h-[100vh]">
            <div className='bg-gradient-to-r from-purple-400/[0.7] via-pink-500/[0.8] to-red-500/[0.6]  h-[100%]'>
                <div className='flex justify-around items-center h-[100%]'>
                    <div className='m-4 p-4'>
                        <p className='rounded-md text-4xl font-bold text-white'>Welcome To Coaching Wood</p>
                        <p className='rounded-md text-2xl font-medium text-white mb-4'>India's largest coaching platform.</p>
                        <a href='https://coachingwood.in/' class='bg-blue-500 text-white rounded-xl p-1 px-3 text-lg font-medium'>Explore More <FaArrowAltCircleRight className='inline'/></a>
                    </div>
                    <div className='w-[35%]'>
                        <form className='p-5 bg-white border rounded-2xl'>
                            <p className='text-2xl font-medium rounded-md  text-center text-sky-500'>Sing In</p>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                            <p className='text-sm font-bold text-black-500 mt-2'>I don't have any account!
                            <span className='text-sm font-medium text-blue-500 mt-2'> Create a new account.</span> </p>
                          
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
