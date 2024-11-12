import React from 'react'
import bodyimage from '../assets/body-part.png'
import equipimage from '../assets/equipment.png'
import targimage from '../assets/target.png'
const Detail = ({exerciseDetail}) => {
    const {bodyPart , name , target , gifUrl, equipment} = exerciseDetail

    const extradetail = [
        {
            icon:bodyimage,
            name:bodyPart
        },
        {
            icon:equipimage,
            name:equipment
        },
        {
            icon:targimage ,
            name:target
        }
    ]
        

    
    return (
        <div className='flex sm:flex-row flex-col items-center 
        justify-center pt-10 px-20 gap-[50px]
        sm:pt-20 sm:gap-60  text-gray-300'>
        <img src={gifUrl} alt={name}  loading='lazy' className='rounded-xl   w-6/6 sm:w-3/6 sm:mb-20'/>
            <div className='sm:w-3/6 w-6/6'>
                <p className='text-[50px]'>{name}</p>
                <p className='text-[20px]'>
                    Exercises keep you strong. {name} {` `}
                    is one of the best exercises to target your {target} . It will help you 
                    improve your mood to gain energy

                </p>
                {extradetail.map((item , index)=>(
                    <div className='flex gap-5 pt-10 items-center' key={index}>
                        <button className='bg-gray-300 p-2 rounded-[50%] '>
                            <img src={item.icon} alt={item.name}  />
                        </button>
                        <p className='capitalize text-[20px]'>
                            {item.name}
                        </p>
                       
                    </div>
                ))}
                 {/* <button className='mx-5 my-10 border px-3 py-2 rounded-lg bg-gray-300 '>
                            <p className='text-[20px] text-black'>Save</p>
                 </button> */}
            </div>
        </div>
    )
}

export default Detail
