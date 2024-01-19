import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Shimmer } from 'react-shimmer';

function Mcqs() {
    const [mcqData, setMcqData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://dull-trousers-deer.cyclic.app/api/Asslist`)
          .then(response => {
            setLoading(false)
            const limitedMcqData = response.data.slice(0, 6);
            setMcqData(limitedMcqData);  // Update to response.data
            console.log(response.data);  // Log the actual data
          })
          .catch(error => {
            // Handle errors
            alert('Error uploading data:', error.message);
            console.log(error)
          });
      }, []);
      const options = [
        'Download',
        'Ask More',
        'Feedback',
  
      ];
      
      const ITEM_HEIGHT = 48;
      
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
      
  return (
    <div className='mcqs p-2 p-md-4' >
        <div className="mcq-top d-flex justify-content-between align-items-center">
           <div>
           <label htmlFor="" className='d-block fs-3'>Assessment</label>
            <small className='text-secondary'>Improve Your Learning Progress</small>
           </div>
           <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
        </div>
        <hr />
      <ul className='m-0 p-0'>
        {
           loading?(
            Array(4)
            .fill(null)
            .map((_, index) => (
            <>
            <Shimmer width="100%" height={60} className='mb-3 rounded-3'/>
            </>
            ))
           ):(
            mcqData.map((item, index)=>(
              <li key={index} className='mb-3'>
                <div disabled className="assessment d-flex align-items-center justify-content-between mb-3">
                     {/* <div className="row align-items-center">
                      <div className="col-12 col-sm-12 col-md-8">
                      <h1 className="fs-5 fw-bold title d-flex align-items-center gap-2 justify-content-center"><i class="bi bi-journal-code text-main"></i> {item.topic}</h1>
                      </div>
                      <div className="col-12 col-sm-12 col-md-4 text-center">
                    
                      </div>
                     </div> */}
                     <div className="row align-items-center">
                      <div className="col-3 col-md-5">
                      <img src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-2.png" alt="image" className='w-100' />
                      </div>
                      <div className="col-9 col-md-7">
                        <h1 className="fs-5 fw-bold">MERN Fullstack Bootcamp</h1>
                        <p className="fs-5">complete the assaignments and get rewards</p>
                        <span data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='w-100 mt-3'><Button variant="contained" className='rounded-5'> <i class="bi bi-lock" ></i>Take Test</Button></span>
                        </div>
                     </div>
                  </div>
                
              </li>
          )) 
        )
            }
      </ul>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer d-flex gap-3">
        <Button variant='outlined' data-bs-dismiss="modal">Remind me later</Button>
       <a href="https://be-practical.com/"> <Button variant='contained'>Unclock</Button></a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Mcqs
