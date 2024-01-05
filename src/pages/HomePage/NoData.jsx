import React from 'react'
import './style.css'
import nodataimage from '../../components/images/no-data.svg'
import { Button } from '@mui/material'

function NoData() {
  return (
    <section className='no-data container-fluid p-3'>
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-4 text-center">
                <img src={nodataimage} alt="noData-image" className="w-100" />
                <p>Sorry you can't access our workshop matierials <b>Create Account To continue..</b></p>
                 <Button variant="contained"  className='mt-3 p-3'>Create Account</Button>

            </div>
        </div>
    </section>
  )
}

export default NoData
