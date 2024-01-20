import React from 'react'
import './style.css'
import { Button } from '@mui/material'

function DigitalLibrary() {
  return (
    <div>
       <div className="d-flex h-100 flex-column justify-content-between align-items-center p-2 align-items-center">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/e-library-6848261-5607048.png?f=webp" alt="" className="w-100" />
        <h1 className="fs-4 text-center">Digital library</h1>
        <Button variant='contained' data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='rounded-5'>Unlock</Button>
        
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border-0">
       <div>
       <h1 class="modal-title fs-5" id="staticBackdropLabel">Unlock Digital Library</h1>
        <p className="fs-6 text-secondary">For You best Practices</p>
       </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="username"/>
  <label for="floatingInput">Username</label>
</div>
<div class="form-floating">
  <input type="email" class="form-control" id="floatingPassword" placeholder="email address"/>
  <label for="floatingPassword">Email Address</label>
</div>
<div class="form-floating mt-3">
  <input type="text" class="form-control" id="floatingPassword" placeholder="phone number"/>
  <label for="floatingPassword">Phone Number</label>
</div>
<div class="form-floating mt-3">
<input type="text" class="form-control" id="floatingPassword" placeholder="course" list='sugg_courses'/>
  <label for="floatingPassword">Intrested Course</label>
</div>
<datalist id="sugg_courses">
    <option value="MERN Fullstack">MERN Fullstack Course</option>
    <option value="JAVA Fullstack">Java Fullstack Course</option>
    <option value="PYTHON Fullstack">Python Fullstack Course</option>
    <option value="Digital Marketing">Digital Marketing</option>
    <option value="Data Science">Data Science</option>
    <option value="CloudOops">CloudOops</option>
</datalist>
<Button variant='contained' className="btn btn-primary w-100 mt-3 p-3 fs-6">Ask to Unlock</Button>

      </div>
      <div class="modal-footer">
       
       
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default DigitalLibrary
