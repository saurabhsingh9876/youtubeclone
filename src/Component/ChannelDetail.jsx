import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Box } from '@mui/material'
import Video from './Video'
import ChannelCard from './ChannelCard'
import { Featchfromapi } from '../utils/Featchfromapi'

function ChannelDetail() {
  const [channelDetail,setchannelDetail]=useState(null);
  const [video,setvideo]=useState([])
  const {id}=useParams();
  console.log("hi")
  console.log(channelDetail)
  useEffect(()=>{
  Featchfromapi(`channels?part=snippet&id=${id}`)
  .then((data)=>setchannelDetail(data?.items[0]))
  Featchfromapi(`search?channelId=${id}&part=snippet&order=date`)
  .then((data)=>setvideo(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <h1>{id}</h1>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,85,0.9977240896358543) 35%, rgba(0,212,255,1) 100%)',zIndex:10,height:'250px'}}
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop="-103px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}}/>
          <Video videos={video}/>
        {/* </Box> */}
      </Box>

    </Box>
  )
}

export default ChannelDetail