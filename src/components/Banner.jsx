import React from 'react'
import Image from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='w-full h-[100vh] relative right-0'>
            
            <img src={Image} alt="Image" className='h-full w-full object-cover brightness-[25%] -z-10 relative' />
            <div className='text-gray-300 absolute  sm:top-[50px] md:top-[150px] sm:left-28 top-[120px] left-14'>
                <h1 className='sm:text-[100px] text-[50px] font-normal'>Fitness Club</h1>
                <h2 className='sm:left-12 left-6 absolute sm:text-[50px] text-[25px]'>Sweat , Smile <br /> and Repeat</h2>
                <h3 className='sm:left-12 left-6 relative sm:text-[50px] text-[25px] top-20 sm:top-36 '>Checkout our more Effective Exercises</h3>
                <button className='bg-gray-300 absolute sm:mt-[158px] mt-[90px] ml-[25px]  sm:ml-[50px] px-4 py-4 text-black rounded-lg font-normal' >
                   <a href="#exercises
                   "> Explore Exercises</a>
                   
                </button>
            </div>
           
        </div>
    )
}

export default Banner
