import React from 'react'
import './style.css'
import nodataimage from '../../components/images/no-data.svg'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'

function NoData() {
  const {link} = useParams()
  return (
    <section className='no-data container-fluid p-3'>
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-4 text-center">
                <img src="https://img.freepik.com/free-vector/download-concept-illustration_114360-2857.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais" alt="noData-image" className="w-100" />
                <h1 className="fs-3">Hello Developer 👋</h1>
                <p>Thank you for Joining Our Workshop.<b>Download this Matierial Best of luck to your feature</b></p>
                <a href={link}> <Button variant="contained"  className='mt-3 p-3'>Download PDF</Button></a>
            </div>
        </div>
    </section>
  )
}

export default NoData
