import React from 'react'
import './style.css'
const data = [
    {
        image:"https://edigitaluniversity.com/wp-content/uploads/2023/03/online-digital-marketing-courses.jpg",
        title:"Marketing"
    },
    {
        image:"https://schportalmedia.s3.eu-west-2.amazonaws.com/courseimg/MERN-COURSE.png",
        title:"Mern Fullstack"
    },
    {
        image:"https://www.analyticsinsight.net/wp-content/uploads/2022/05/Top-10-Python-Full-Stack-Developer-Courses-to-Take-up.jpg",
        title:"Python Fullstack"
    },
    {
        image:"https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png",
        title:"java Fullstack"
    },
    {
        image:"https://lh3.googleusercontent.com/proxy/q7RoDn49Nv2W1O7pLYp748vTHAl_MvimNnKO6v0H7HillBsrYXpoTlnuYX-HwVH5JzZHJsphebzp3l58d5OEE_2skA",
        title:"Data Science"
    },
    {
        image:"https://www.cisco.com/c/dam/assets/swa/img/anchor-info/cloud-operations-628x353.png",
        title:"Cloud Oops"
    }
]
function Categories() {
  return (
    <section className='categories p-3 container-fluid'>
      <h1 className="fs-3">Categories</h1>
      <small className="small text-secondary">Find a topic by browsing top categories.</small>
      <div className="row mt-3">
        {
            data.map((item, index)=>(
                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                    <div className="categories-card">
                       <div className="category-text">
                       <h1 className="title fs-5 text-white fw-bold">{item.title}</h1>
                       </div>
                        <img src={item.image} alt="" className='w-100 rounded-2' />
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Categories
