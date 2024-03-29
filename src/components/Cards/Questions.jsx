import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainVideo from './MainVideo';

function Questions() {
    const [mcqData, setMcqData] = useState([]);
    useEffect(() => {
        axios.get(`https://stormy-flannel-nightgown-ox.cyclic.app/api/scoresList`)
          .then(response => {
            const sortedMcqData = response.data.sort((a, b) => b.score - a.score);
            const limitedMcqData = sortedMcqData.slice(0, 6);
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
        {/* <p className="fs-4 text-warning ">Our Past Data Science Workshop</p>
        <MainVideo/> */}
        <div className="mcq-top d-flex justify-content-between align-items-center mt-4">
           <div>
           <label htmlFor="" className='d-block fs-3'>Workshop Test Attendees</label>
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
                  <div className="attendee d-flex align-items-center justify-content-between mb-3">
                       <div className='d-flex gap-2'>
                       <img src="https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png" alt="" className="profile" />
                       <div>
                        <span className="fs-5 d-block">{item.name}</span>
                        <small className="text-secondary d-block">{item.email}</small>
                       </div>
                       </div>
                       <Button variant='outlined' className='rounded-5'>{item.score}/21</Button>
                    </div>
                  
                </li>
            ))
        }
      </ul>
      <div className="text-center">
        <Button variant='contained' className='rounded-5'>View all</Button>
      </div>
    </div>
  )
}

export default Questions
