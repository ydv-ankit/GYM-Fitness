import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBurl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailData = await fetchData(`${exerciseDBurl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions)

      setExerciseVideos(exerciseVideosData)
    }

    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail