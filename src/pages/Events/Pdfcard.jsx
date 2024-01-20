import React from 'react'
import './style.css'
import { Button } from '@mui/material'

function Pdfcard({data}) {
  return (
    <div className='pdfcard bg-white p-3'>
      <h1 className='fs-3'>{data.title}</h1>
      <p>{data.description}</p>
      <iframe src={data.link} frameborder="0" className='w-100 rounded-3 p-3 bg-dark'></iframe>
      <a href={`/pdfViewer/${data.id}`}><Button variant='contained' className='rounded-5 mt-3 w-100 p-3 fs-6'>Read PDF</Button></a>
      <a href={`/download/${data.id}`}><Button variant='outlined' className='rounded-5 mt-3 w-100 p-3 fs-6'>Download</Button></a>
    </div>
  )
}

export default Pdfcard
