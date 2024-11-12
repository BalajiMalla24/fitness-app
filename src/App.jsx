import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import ExercisesDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Exercises from './components/Exercises'
import Saved from './pages/Saved'
function App() {


  return (
    <>
  <div>
    <div>
      <Navbar/>
    </div>
     <Routes>
       <Route path="/" element={<Home />} />
       {/* <Route path="/exercises" element={<Exercises />} /> */}
       <Route path="/exercise/:id" element={<ExercisesDetail />} /> 
       <Route path="/saved" element={<Saved />} />
     </Routes>
     <div>
      <Footer/>
     </div>
  </div>
    
    </>
  )
}

export default App
