import React from 'react'
import './style.css'
import { Button } from '@mui/material'

function Bootcamp() {
  return (
    <section className="bootcamp container-fluid p-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6  d-flex flex-column align-items-center">
            <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1704986090~exp=1704986690~hmac=b823004e4384ed3eb4de59d5f6ecba8adb0d52d3345eb5823969f8cf8984963c" alt="register"  className='w-75'/>
            <h1 className='fs-4'>Welcome to LMS</h1>
            <p className="fs-6 text-secondary text-center">Thank you for registering our bootcamp and you can visite ourn LMS to improve your skills.</p>
            <Button variant='contained'>View Dashboard</Button>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            hez
          </div>
        </div>
    </section>
  )
}

export default Bootcamp
