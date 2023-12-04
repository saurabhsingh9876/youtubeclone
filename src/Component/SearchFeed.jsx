
import {Box,Typography} from '@mui/material'
import Sidebaar from './Sidebaar'
import Video from './Video'
import { Featchfromapi } from '../utils/Featchfromapi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function SearchFeed() {

  
  const [videos,setvideo]=useState([])
  const {searchTerm}=useParams();
  console.log(videos)
 useEffect(()=>{
  // Featchfromapi(`search?part=snippet&q=${SelectC}`).then((data)=>setvideo(data.item))
   Featchfromapi(`search?part=snippet&q=${searchTerm}`).then((data)=>setvideo(data.items))
  
 },[searchTerm])
  return (
    <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
    <Typography variant='h4' fontWeight='bold'mb={2} sx={{color:'white'}}>
     Search result for <span style={{color:'#F31503'}}>{searchTerm}</span>video
    </Typography>
    <Video videos={videos}/>
  
  </Box>
  )
}



export default SearchFeed