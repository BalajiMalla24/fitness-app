import React, { useState } from 'react'
import Banner from '../components/Banner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises , setExercises] =useState([])
  const [bodyPart , setBodyPart] = useState('all')
  console.log(bodyPart)

    return (
        <div className=''>
          <Banner/>
          <SearchExercises  setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
          <Exercises   setExercises={setExercises} 
          bodyPart={bodyPart} 
          exercises={exercises} />
        </div>
    )
}

export default Home
