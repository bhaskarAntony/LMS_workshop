import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Mcqs() {
    const [mcqData, setMcqData] = useState([]);
    useEffect(() => {
        axios.get(`https://dull-trousers-deer.cyclic.app/api/Asslist`)
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
    <div className='mcqs p-2 p-md-4'>
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
            mcqData.map((item, index)=>(
                <li key={index} className='mb-3'>
                  <div className="assessment d-flex align-items-center justify-content-between mb-3">
                        <h1 className="fs-5 fw-bold"><i class="bi bi-journal-code text-main"></i> {item.topic}</h1>
                        <a href={`/attend/assessment/${item._id}`}><Button variant="contained" className='rounded-5 take'>Take Test</Button></a>
                    </div>
                  
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Mcqs
