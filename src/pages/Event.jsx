import React from 'react'
import BasicTabs from '../components/Eventtab/BasicTabs'
import Users from '../components/Cards/Users'

function Event() {
  return (
    <section className='event container-fluid'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 bg-light">
           <div className="event-left p-3 ">
            <h1 className="fs-3 mb-3">MERN Fullstack developemnt Bootcamp</h1>
           <div className="video-container">
           <iframe width="100%" height="350" src="https://www.youtube.com/embed/J9KemP3xqH0?si=5qvWTuDwcr583RTX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 rounded-3 bg-dark'></iframe>
            </div>
            <div className="about-event py-3">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-8 col-md-10">
                        <span className="fs-5 d-block">Day1:Create Your Own Chat App</span>
                      <div className="event-profile d-flex align-items-center gap-3 mt-3">
                      <i class="bi bi-person-circle fs-1 text-secondary"></i> 
                    <div>
                    <span className='fs-5 d-block'>Ganesh</span>
                      <i className='text-secondary'>10years of experience</i>
                    </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-2">
                        <span className="d-block fs-5 ">Share</span>
                        <div className="share-icons d-flex justify-content-between align-items-center gap-2">
                            <i className='bi bi-facebook text-primary fs-4'></i>
                            <i className='bi bi-instagram text-danger fs-4'></i>
                            <i className='bi bi-linkedin text-primary fs-4'></i>
                            <i className='bi bi-twitter text-info fs-4'></i>

                        </div>
                    </div>
                </div>
            </div>
            <BasicTabs/>
           </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 bg-light users-event">
          <Users NumUsers={100}/>
          </div>
      </div>
    </section>
  )
}

export default Event
