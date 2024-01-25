import React from 'react'
import './style.css'

const data = [
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/episodes/img-4.jpg",
        duration:"12:40",
        link:"",
        title:"Data Science",
        ordinator:"Vijay"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/episodes/img-3.jpg",
        duration:"15:30",
        link:"",
        title:"Clod Oops",
        ordinator:"thofic"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/episodes/img-2.jpg",
        duration:"20:45",
        link:"",
        title:"Whatsapp clone",
        ordinator:"Ganesh"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/episodes/img-2.jpg",
        duration:"30:00",
        link:"",
        title:"Java Fullstack",
        ordinator:"Atul"
    }
]
function Episodes() {
  return (
    <section className='episodes container-fluid p-2'>
      <div className="episodes-container card ">
        <div className="card-header bg-transparent p-3 d-flex align-items-center justify-content-between ">
            <h1 className="fs-3">Latest Bootcamp Videos</h1>
            <a href="" className=''>See all</a>
        </div>
        <div className="card-body p-3">
           <div className="row">
           {
              data.map((item, index)=>(
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <div className="episode-video card border-0 h-100 ">
                        <div className="p-2 video-header">
                            <img src={item.image} alt="" className='w-100 rounded-3' />
                            <div className="play-icon">
                                <i className='bi bi-play'></i>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent border-0">
                            <span className="d-block fs-6">{item.title}</span>
                          <div className="d-flex align-items-center justify-content-between">
                          <small className="d-block small text-secondary">By {item.ordinator}</small>
                          <a href="">view</a>
                          </div>
                        </div>
                    </div>
                </div>
              ))  
            }
           </div>
        </div>
      </div>
    </section>
  )
}

export default Episodes
