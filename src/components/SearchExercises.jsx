import React, { useEffect, useState } from 'react'

import { exerciseoptions , fetchdata } from '../utils'
import Horizontalscrollbar from './Horizontalscrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
const [search , setsearch] = useState('')
const [bodypartdata , setbodypartdata] = useState([])
console.log(bodyPart)
useEffect(()=>{
const handlebdata =async()=>{
         const data = await fetchdata('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , exerciseoptions)
          setbodypartdata(['all' ,...data ])
       // console.log(data)
}
handlebdata()

} ,[])
const handleSearch = async()=>{
    if(search){
        const exercisesdata = await fetchdata( 'https://exercisedb.p.rapidapi.com/exercises', exerciseoptions)
    //    console.log(exercisesdata)
    //    const searchexercises = exercisesdata.filter((exercise)=>(exercise.name.toLowerCase().includes(search)))
    //                 || exercisesdata.filter((exercise)=>(exercise.target.toLowerCase().includes(search)))
    //                 || exercisesdata.filter((exercise)=>exercise.equipment.toLowerCase().includes(search))
    //                 || exercisesdata.filter((exercise)=>exercise.bodyPart.toLowerCase().includes(search))
    const searchexercises = exercisesdata.filter((exercise)=>{
           return(
               exercise.name.includes(search.toLowerCase())||
               exercise.target.includes(search.toLowerCase())||
               exercise.equipment.includes(search.toLowerCase())||
               exercise.bodyPart.includes(search.toLowerCase())
           )
         

    })
            
            
// console.log(searchexercises)
 setsearch('')
setExercises(searchexercises)
    }
 
 
}

    return (
        <div className=' bg-[#3f2915] text-gray-300 w-full relative right-0 '>
           <div className='flex flex-col items-center justify-center align-middle'>
            <p className='mt-[50px] p-[20px] sm:text-[50px] text-center'>All the Exercises you need to know</p>
            <div className='relative'>
            <input type="text" placeholder='searchExercises' className='sm:w-[500px]  
             md:w-[700px] lg:w-[1170px] p-3 mb-10 
             h-[40px] rounded-md sm:text-[20px] text-[18px] 
            outline-none text-black' 
            onChange={(e)=>{setsearch(e.target.value)}}
            value={search}/>
             <button className='bg-gray-300 text-[#3f2915] 
             py-1.5 rounded-r-md 
             px-4 text-lg absolute 
             right-0
             '
             onClick={handleSearch}
             >Search</button>
            </div>
            <div className='relative p-20 w-full' >
              <Horizontalscrollbar  data={bodypartdata} bodyPart={bodyPart} setBodyPart={setBodyPart} bodypartdata/>
            </div>
           </div>   
        </div>
    )
}

export default SearchExercises
