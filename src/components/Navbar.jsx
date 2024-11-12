import React from 'react'
import logo from '../assets/11247.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
 <>
    <div className='flex items-center px-0 sm:px-20 bg-[#3f2915] text-gray-300 bg-opacity-90
       gap-10 sm:gap-0 sm:h-24 h-16 sm:text-xl text-md fixed w-full '>
        <Link to="/" className='ml-20 sm:ml-0   ' >
        <img src={logo} alt="logo" 
        className='sm:h-20 sm:w-20 h-14 w-14 rounded-[50%] '
        />
        </Link>
        <div className='flex justify-center sm:m-auto sm:gap-40 gap-12 items-center mr-4'>
             <Link to="/" className='border-b-white border-b-2'>Home</Link>
             <a href="#exercises" >Exercises</a>
             {/* <Link to="/exercises" >Exercises</Link> */}
             {/* <Link to="/saved" className=''>Saved</Link> */}
        </div>


     </div>
 </>
    )
}

export default Navbar
