
import React from 'react'
import Videolist from '../components/Videolist'

const Home = ({videoData , setVideoData , slide, setSlide}) => {

  return (
    <div>
      <Videolist videoData={videoData} setVideoData={setVideoData} slide={slide}></Videolist>
    </div>
  )
}

export default Home
