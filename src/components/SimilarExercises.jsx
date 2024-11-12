import React from 'react'
import ExerciseCard from './ExerciseCard'
import Horizontalscrollbar from './Horizontalscrollbar'
import Loader from './Loader'
const SimilarExercises = ({equipmentmuscle , targetmuscle}) => {
    return (
        <div className='p-20 text-gray-300 '>
            <p className='text-[30px] mb-10'>Exercises that target the same muscle group</p>
            <div className=' relative w-full '>
               {
                targetmuscle.length!==0 ? <Horizontalscrollbar data={targetmuscle} className='gap-[10px]'/>: <Loader/>
               }
            </div>
            <p className='text-[30px] pt-20 mb-10'>Exercises of same equipment</p>
            <div className='relative  w-full '>
               {
              equipmentmuscle.length!==0 ? <Horizontalscrollbar data={equipmentmuscle}/>: <Loader/>
               }
            </div>
        </div>
    )
}

export default SimilarExercises
