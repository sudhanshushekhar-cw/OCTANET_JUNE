import React from 'react'
import { FaStar } from "react-icons/fa";
export const AboutSection = () => {
    return (
        <div className='bg-red-100 text-center p-2'>
            <div className='text-black rounded-md text-3xl font-medium underline p-4'>About Us</div>
            <div className='flex mt-2'>
       
                    <img className='rounded-xl' src="https://st.depositphotos.com/1010683/2515/i/450/depositphotos_25158297-stock-photo-exterior-of-building.jpg" />
         
                <div className='bg-white/[0.6] rounded-2xl mx-3 text-justify p-4'>
                    <h1 className='text-3xl font-bold py-3'>Coaching Wood</h1>
                    Coaching Wood stands out as the premier solution in the market for developing bespoke applications tailored specifically for educational institutes. Whether you’re looking to enhance your institute’s digital presence or streamline administrative tasks, CoachingWood offers unparalleled services to meet your needs.
                    <ul  className='mx-4' >
                        <li><FaStar className='inline' /> Simplify administrative tasks with automated attendance, fee management, and academic tracking.</li>
                        <li><FaStar className='inline' /> Provide students with easy access to schedules, grades, and learning resources.</li>
                        <li><FaStar className='inline' /> Enhance communication between students, parents, and teachers with integrated messaging and notification systems.</li>
                    </ul>

                    <p className='font-medium py-3'>Join the CoachingWood Family Today! Get Started Now: Visit www.coachingwood.com</p>
                </div>


            </div>

        </div>
    )
}
