import React from 'react'
import './style.css'

const data = [
  {
    title:"Data Since",
    desc:"",
    link:""
  }
]
function Poll() {
  return (
    <div className='poll-container mt-3 p-3'>
         <span className="fs-3 d-block">Bootcamp Poll</span>
      <small className="text-secondary">Add your opinion in poll</small>
      {/* <div className="poll-top mt-3">
        <div className="row">
            <div className="col-6">
            <div className="poll-top-card">
            <h1 className="fs-3 text-success">YES</h1>
            <span className="d-block fs-2">90%</span>
        </div>
            </div>
            <div className="col-6">
            <div className="poll-top-card">
            <h1 className="fs-3 text-danger">NO</h1>
            <span className="d-block fs-2">10%</span>
        </div>
            </div>
        </div>
      </div>

      <div className="poll-choose my-5">
        <h1 className="fs-3 text-center mb-5">Choose your opinion</h1>

        <div className="poll-yes poll d-flex align-items-center gap-3 rounded-3 p-3">
        <span className="fs-4">Yes</span>
        <progress min="0" max="100" value="90" className='w-100 p-yes'></progress>
        <span className="fs-3" id='poll-yes'>90%</span>
        </div>
        <div className="poll-yes poll d-flex align-items-center mt-3 gap-3 rounded-3 p-3">
        <span className="fs-4">No</span>
        <progress min="0" max="100" value="10" className='w-100 p-no'></progress>
        <span className="fs-2" id='poll-yes'>10%</span>
        </div>
      
      </div> */}

    </div>
  )
}

export default Poll
