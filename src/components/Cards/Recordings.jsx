import React from 'react'
import i1 from '../images/1.png'
import i2 from '../images/2.png'
import i3 from '../images/3.png'
import './style.css'

const data = [
    {
        title:"Structurize your entire chatApp",
        desc:"Get the entire roadmap to build your own chatApp with the help of Sockets",
        link:"J9KemP3xqH0",
        thumbnail:i1,
    
    },
    {
        title:"Think the logic and make it logical ",
        desc:"Build your UI much more intrcative with the help of ReactJs",
        link:"Mf5cdGwryI8",
        thumbnail:i2,
    
    },
    {
        title:"Deploy your project with ease",
        desc:"Get the complete roadmap to deploy your project with the help of git",
        link:"Mf5cdGwryI8",
        thumbnail:i3,
    },

]
function Recordings() {
  return (
    <div className='recordings'>
        <h1 className="fs-3 mb-2">All Recording</h1>
      {
        data.map((item, index)=>(
           <a href={`/recordings/${item.link}`} className='decoration-none'>
             <div className='youtube-card mb-4 p-2 rounded-2 overflow-hidden' key={index}>
               <div className="row align-items-center">
                <div className="col-3">
                <img src={item.thumbnail} alt="" className='w-100 rounded-3' />
                </div>
                <div className="col-9">
                    <span className="fs-6 fw-bold title">{item.title}</span> <br />
                    <small className="text-secondary">{item.desc}</small>
                </div>
               </div>
                
            </div>
           </a>
        ))
      }
    </div>
  )
}

export default Recordings
