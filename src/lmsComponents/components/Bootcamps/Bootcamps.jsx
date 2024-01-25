import React from 'react'
const data = [
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/courses/img-4.jpg",
        title:"Java DSA Bootcamp",
        desc:"Learn java DSA from beginning to adwance",
        hours:"4 Hours",
        ordinator:"Atul",
        coast:"Free"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/courses/img-2.jpg",
        title:"Java DSA Bootcamp",
        desc:"Learn java DSA from beginning to adwance",
        hours:"4 Hours",
        ordinator:"Atul",
        coast:"Free"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg",
        title:"Java DSA Bootcamp",
        desc:"Learn java DSA from beginning to adwance",
        hours:"4 Hours",
        ordinator:"Atul",
        coast:"Free"
    },
    {
        image:"https://demo.foxthemes.net/courseplus/assets/images/courses/img-3.jpg",
        title:"Java DSA Bootcamp",
        desc:"Learn java DSA from beginning to adwance",
        hours:"4 Hours",
        ordinator:"Atul",
        coast:"Free"
    }
]
function Bootcamps() {
  return (
    <section className='bootcamps p-3'>
        <h1 className="fs-3">The world's largest selection of courses</h1>
        <small className='small text-secondary'>Choose from 130,000 online video courses with new additions published every month</small>
      <div className="row mt-3">
      {
            data.map((item, index)=>(
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3">
                  <a href="/view">
                  <div className="bootcamp-card card h-100">
                    <div className="card-header p-0">
                    <img src={item.image} alt="" className='w-100' />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <span className="fs-5 d-block fw-bold">{item.title}</span>
                        <span className="fs-6 text-justify d-block text-secondary">{item.desc}</span>
                        <small className="small">{item.hours}</small>
                        <div className="bootcamp-bottom d-flex align-items-center justify-content-between">
                            <small className="small text-secondary">{item.ordinator}</small>
                            <small className="small text-secondary">{item.coast}</small>
                        </div>
                    </div>

                    </div>
                  </a>
                </div>
            ))
        }
      </div>
      
    </section>
  )
}

export default Bootcamps
