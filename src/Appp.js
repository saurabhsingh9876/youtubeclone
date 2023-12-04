import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Component/Navbar'
import Feed from './Component/Feed'
import VideoDetail from './Component/VideoDetail'
import ChannelDetail from './Component/ChannelDetail'
import SearchFeed from './Component/SearchFeed'

const Appp =()=>(
 <BrowserRouter>
 <Box sx={{backgroundColor:'#000'}}>
  <Navbar />
  <Routes>
    <Route path='/' exact element={<Feed />}/>
    <Route path='/video/:id' element={<VideoDetail/>}/>
    <Route path='/channel/:id' element={<ChannelDetail/>}/>
    <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
  </Routes>
 </Box>
 </BrowserRouter>)
export default Appp