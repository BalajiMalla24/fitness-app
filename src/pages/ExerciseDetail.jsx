import { useEffect, useState } from "react"
import React from 'react'
import { fetchdata , exerciseoptions , youtubeoptions } from "../utils"
import { useParams } from "react-router-dom"
import Detail from "../components/Detail"
import SimilarExercises from "../components/SimilarExercises"
import ExerciseVideos from "../components/ExerciseVideos"


const ExercisesDetail = () => {
const [exerciseDetail, setexerciseDetail] = useState({})
const [exerciseVideos , setexerciseVideos] =useState([])
const [targetmuscle ,  settargetmuscle] = useState([])
const [equipmentmuscle , setequipmentmuscle] = useState([])

const {id} = useParams()
 useEffect(()=>{
const fetchexercisesdata =async()=>{
       const exercisedburl = 'https://exercisedb.p.rapidapi.com'
       const youtubeurl = 'https://youtube-search-and-download.p.rapidapi.com'
       const exeiddata =  await fetchdata(`${exercisedburl}/exercises/exercise/${id}` , exerciseoptions)

       setexerciseDetail(exeiddata)
       const youtubedata = await fetchdata(`${youtubeurl}/search?query=${exeiddata.name}` , youtubeoptions)
        setexerciseVideos(youtubedata.contents)
        const exercisetarget = await fetchdata(`${exercisedburl}/exercises/target/${exeiddata.target}` , exerciseoptions)
        const exerciseequipment = await fetchdata(`${exercisedburl}/exercises/equipment/${exeiddata.equipment}` , exerciseoptions)
       settargetmuscle(exercisetarget)
       setequipmentmuscle(exerciseequipment) 
}
fetchexercisesdata()
 } , [id])
    return (
        <div className="bg-[#3f2915] ">
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises equipmentmuscle={equipmentmuscle} targetmuscle={targetmuscle} />
        </div>
    )
}

export default ExercisesDetail
