// import React, { useState } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Sidebaar from './Sidebaar'
import Video from './Video'
import { Featchfromapi } from '../utils/Featchfromapi'
import { useEffect, useState } from 'react'

function Feed() {
  const [SelectC,setSelectC]=useState('New')
  const [videos,setvideo]=useState([])
  console.log(videos)
 useEffect(()=>{
  // Featchfromapi(`search?part=snippet&q=${SelectC}`).then((data)=>setvideo(data.item))
   Featchfromapi(`search?part=snippet&q=${SelectC}`).then((data)=>setvideo(data.items))
  
 },[SelectC])
  return (
    <Stack sx={{ flexDirection:{sx:
    "column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:'2'}}}>
        <Sidebaar 
        SelectC={setSelectC} setSelectC={setSelectC}/>
        <Typography className='copyright'
        variant='body2' sx={{mt:1.5,color:"#fff"}}>
          CopyRight 2022 jsx media
        </Typography>
      </Box>
<Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
  <Typography variant='h4' fontWeight='bold'mb={2} sx={{color:'white'}}>
   {SelectC} <span style={{color:'#F31503'}}>Video</span>
  </Typography>
  <Video videos={videos}/>

</Box>
    </Stack>
  )
}

export default Feed