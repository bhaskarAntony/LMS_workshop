import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainVideo from './MainVideo';

function Video() {
    const [mcqData, setMcqData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3200/api/Mcqlist`)
          .then(response => {
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
    <div className='mcqs p-2 p-md-3'>
        <MainVideo/>
        <div className="mcq-top d-flex justify-content-between align-items-center">
           <div>
           <label htmlFor="" className='d-block fs-3'>Workshop Recordings</label>
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
      <ul>
        {/* {
            mcqData.map((item, index)=>(
                <li key={index} className='mb-3'>
                  <div className="question d-flex align-items-center justify-content-between mb-3">
                        <h1 className="fs-5 fw-light text-">Question{index}: <span className='blur-question text-secondary'>{item.question.slice(0, 20)}</span></h1>
                        <Button variant="contained" className='rounded-5'>Take Test</Button>
                    </div>
                  
                </li>
            ))
        } */}
      </ul>
    </div>
  )
}

export default Video
