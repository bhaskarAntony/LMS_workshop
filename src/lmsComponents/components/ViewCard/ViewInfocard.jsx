import { Button } from '@mui/material'
import React from 'react'

function ViewInfocard() {
  return (
    <div className='card'>
      <div className="card-header d-flex justify-content-between">
        <div>
            <h1 className="fs-2">4</h1>
            <small className="small">Hours</small>
        </div>
        <div>
            <h1 className="fs-2">12,140</h1>
            <small className="small">Students</small>
        </div>
      </div>
      <div className="card-body p-0">
        <ul className="list-group p-0">
        <li className="list-group-item fs-6"><i className='bi bi-play fs-4 mx-2'></i> 13 hours on-demand video</li>
        <li className="list-group-item fs-6"><i className='bi bi-key fs-4 mx-2'></i> Full lifetime access</li>
        <li className="list-group-item fs-6"><i className='bi bi-cloud-download mx-2 fs-4'></i> 42 downloadable resources</li>
        <li className="list-group-item fs-6"><i className='bi bi-code-slash mx-2 fs-4'></i> Assignments</li>
            <li className="list-group-item fs-6"><i className='bi bi-patch-check mx-2 fs-4'></i>Certificate of Completion</li>
        </ul>
      <div className="p-3">
      <Button variant='contained' className='p-2 w-100 mt-3'>Enroll Now</Button>
      </div>
      </div>
    </div>
  )
}

export default ViewInfocard
