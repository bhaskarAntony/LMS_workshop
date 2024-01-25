import React from 'react'
import './style.css'

const data = [
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/book/book4.jpg",
        name:"HTML Breaker"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/book/book5.jpg",
        name:"CSS Maker"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/book/book1.jpg",
        name:"Vue.js Basics"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/book/book2.jpg",
        name:"HTML5 & CSS3"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/book/book3.jpg",
        name:"Learn CSS"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/book/book4.jpg",
        name:"HTML Breaker"
    }
]
function DititalLibrary() {
  return (
    <section className='digital-library container-fluid'>
       <div className='d-flex align-items-center justify-content-between'>
      <div>
      <h1 className="fs-3">Digital Library</h1>
        <small className="small text-secondary">Digital library Helps you to build the strong career in IT industry</small>
      </div>
      <a href="">See all</a>
       </div>
       
      
      <div className="row mt-3">
        {
            data.map((item, index)=>(
                <div className="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <div className="library-card card overflow-hidden rounded-3 h-100">
                        <img src={item.image} alt="" className='w-100' />
                        <div className="card-footer">
                            <span className="fs-6 w-100 text-center text-secondary">{item.name}</span>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default DititalLibrary
