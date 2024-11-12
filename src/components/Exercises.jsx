import React, { useEffect } from 'react'
import { fetchdata , exerciseoptions } from '../utils'
import ExerciseCard from './ExerciseCard'


const Exercises = ({setExercises ,  exercises , bodyPart}) => {
    // console.log(exercises)


useEffect(() => {
const fetchexercisesdata = async()=>{
    let exercisesdata= []
    if (bodyPart==='all') {
        exercisesdata = await fetchdata( 'https://exercisedb.p.rapidapi.com/exercises', exerciseoptions)
    } else {
        exercisesdata = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}` , exerciseoptions)
    }
    setExercises(exercisesdata)

}
fetchexercisesdata()
}, [bodyPart])
// useEffect(()=>{
//     const fetchexercisesdata=async()=>{
//         let exercisedata = []
//         if (all===bodyPart) {
//            exercisedata = await fetchdata('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions)
//         } else {
//            exercisedata = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}` , exerciseoptions)
//         }
//         setExercises(exercisedata)
//     }
//     fetchexercisesdata()
    
// } , [bodyPart])
    return (
        <div className='bg-[#3f2915] text-gray-300 
            lg:pt-[110px] pt-[50px] p-[80px]' id='exercises' >
            <p className='text-[50px] mb-[30px]'>Showing Results</p>
            <div className='flex flex-row flex-wrap justify-center sm:gap-[10px] lg:gap-[110px]'>
                {exercises.length > 0 ?
                  (exercises.map((exercise , index)=>(
        
                    <ExerciseCard exercise={exercise} key={index}/>
             ))):(
                <div>
                    <p className='text-[30px]'>No results found</p>
                </div>
             )
                }
                 
            </div>
        </div>
    )
}

export default Exercises
