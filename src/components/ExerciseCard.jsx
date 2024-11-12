import React from 'react'
import {Link} from 'react-router-dom'
const ExerciseCard = ({exercise}) => {
    return (
        <>
             <Link to={`/exercise/${exercise.id}`} >
             <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='rounded-lg sm:w-[400px] w-[300px] ease-in-out duration-300'/>
                <div className='flex flex-row gap-[20px]'>
                    <button className='bg-gray-300 text-[#3f2915] rounded-2xl mt-10 py-2 px-5 capitalize'>
                     {exercise.bodyPart}
                    </button>
                    <button className='bg-gray-300 text-[#3f2915] rounded-2xl mt-10 py-2 px-5 capitalize'>
                     {exercise.target}
                    </button>
            
                </div>
                <p className='mt-5 capitalize sm:mb-0  mb-10 text-[20px]'>{exercise.name}</p>
             </Link>
        </>
    )
}

export default ExerciseCard
