import React from 'react'
import BasicTabs from '../components/Eventtab/BasicTabs'
import Users from '../components/Cards/Users'
import Pdfcard from './Events/Pdfcard'
import pdfHtml from '../pdfs/html.pdf'
import pdfCss from '../pdfs/CSS.pdf'
import pdfJs from '../pdfs/JS.pdf'
import { useParams } from 'react-router-dom'
import i1 from '../components/images/1.png'
import i2 from '../components/images/2.png'
import i3 from '../components/images/3.png'
import './style.css'

const pdfData = [
  {
    id:1,
    title:"HTML for Beginners",
    description:"Learn HTML from the scartch and get the exclusive insights of HTML ",
    link:pdfHtml
  },
  {
    id:2,
    title:"CSS for Beginners",
    description:"Style your HTML doccument with CSS skills",
    link:pdfCss
  },
  {
    id:3,
    title:"Javascript For Beginners",
    description:"Build your own logic with the help of Javascript",
    link:pdfJs
  }
  

]

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
      thumbnail:i3,
  },

]
function Event() {
  const {link} = useParams()
  return (
    <section className='event container-fluid'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 bg-light">
           <div className="event-left p-3 ">
            <h1 className="fs-3 mb-3">MERN Fullstack developemnt Bootcamp</h1>
           <div className="video-container">
           <iframe width="100%" height="350" src={`https://www.youtube.com/embed/${link}?si=5qvWTuDwcr583RTX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`} allowfullscreen className='w-100 rounded-3 bg-dark'></iframe>
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
                        {/* <span className="d-block fs-5 ">Share</span>
                        <div className="share-icons d-flex justify-content-between align-items-center gap-2">
                            <i className='bi bi-facebook text-primary fs-4'></i>
                            <i className='bi bi-instagram text-danger fs-4'></i>
                            <i className='bi bi-linkedin text-primary fs-4'></i>
                            <i className='bi bi-twitter text-info fs-4'></i>

                        </div> */}
                    </div>
                </div>
            </div>
            <hr />
            <div className="more-Videos mb-3">
            <div className="row">
              {
                data.map((item, index)=>(
                  <>
                
                    <div className="col-12 col-sm-6 col-md-4">
                     <div className="more-card mb-4">
                     <a href={`/recordings/${item.link}`} className='text-black'>
                        <img src={item.thumbnail} alt="" className='w-100 rounded-3' />
                        <span className="d-block fs-5 title fw-bold">{item.title}</span>
                        <small className="d-block fs-6 text-secondary">{item.desc}</small>
                      </a>
                     </div>
                    </div>
                 
                  </>
                ))
              }
               </div>
            </div>
            <hr />
            <BasicTabs/>
           </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 bg-light users-event">
          {/* <Users NumUsers={100}/> */}
          {
            pdfData.map((item , index)=>(
              <>
              <Pdfcard data={item}/>
              </>
            ))
          }
          </div>
      </div>
    </section>
  )
}

export default Event
