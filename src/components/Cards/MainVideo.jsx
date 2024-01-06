import React from 'react'
import mainVideo from '../../components/images/main-video.mp4'
import './style.css'

function MainVideo() {
  return (
    <div className='main-video'>
    <video src={mainVideo} width="100%" muted autoPlay loop controls></video>
    </div>
  )
}

export default MainVideo
