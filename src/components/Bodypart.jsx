import React, { useContext } from 'react'
import logo from '../assets/icon.png'
const Bodypart = ({ item, bodyPart, setBodyPart }) => {


    return (
        <div className= {`flex flex-col 
        justify-center items-center
    ${item===bodyPart ? 'border-t-4 border-gray-300':''} 
    h-[269px]
    w-[269px]
    gap-[30px]
    rounded-bl-lg
    cursor-pointer
    drop-shadow-xl
    `}
         type='button'
         onClick={() => setBodyPart(item)}
        >

            <img src={logo} alt="logo" className='w-[100px] h-[100px] ' />
            <h1 className='text-2xl text-gray-300'>{item}</h1>
        </div>
    )
}

export default Bodypart
