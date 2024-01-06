import React from 'react'
import './style.css'
import nodataimage from '../../components/images/no-data.svg'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'

function NoUser() {
  return (
    <section className='no-data container-fluid p-3'>
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-4 text-center">
                <img src={nodataimage} alt="noData-image" className="w-100" />
                <h1 className="fs-3">Hello Developer 👋</h1>
                <p>Sorry you can't enter to dashboard.<b> Sign In or Sign Up view Dashboard</b></p>
                <a href="/signin"><Button variant="contained"  className='mt-3 p-3'>Sign in / Sign up</Button></a>
            </div>
        </div>
    </section>
  )
}

export default NoUser
