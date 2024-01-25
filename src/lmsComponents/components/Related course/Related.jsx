import React from 'react'
import './style.css'

const data = [
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/courses/img-2.jpg",
        description:"The complete javascript from beginners from experts"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/courses/img-4.jpg",
        description:"The complete javascript from beginners from experts"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/courses/img-2.jpg",
        description:"The complete javascript from beginners from experts"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/courses/img-3.jpg",
        description:"The complete javascript from beginners from experts"
    }
]
function Related() {
  return (
    <section className='related card mt-4'>
        <div className="card-header">
      <h1 className="fs-3">Related Courses</h1>

        </div>
      <div className="card-body">
        {
            data.map((item, index)=>(
                <li className='d-flex mb-3'>
                  <div className="related-left">
                  <img src={item.image} alt="" className='w-100'/>
                  </div>
                  <div className=" related-right">
                    <small className="small">{item.description}</small>
                  </div>
                </li>
            ))
        }
      </div>
        <div className="card-footer text-center">
            <a href="">See all</a>
        </div>
    </section>
  )
}

export default Related
