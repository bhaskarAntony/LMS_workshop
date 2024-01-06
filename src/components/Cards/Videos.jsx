import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainVideo from './MainVideo';
import { Shimmer } from 'react-shimmer';
import { toast } from 'react-toastify';

function Video() {
    const [mcqData, setMcqData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://dull-trousers-deer.cyclic.app/api/Asslist`)
          .then(response => {
            setLoading(false)
            const limitedMcqData = response.data;
            setMcqData(limitedMcqData);  // Update to response.data

            console.log(response.data);  // Log the actual data
          })
          .catch(error => {
            // Handle errors
            toast.error(error.message);
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
      <ul className='m-0 p-0'>
        {
          loading?(
            Array(1)
            .fill(null)
            .map((_, index) => (
            <>
            <Shimmer width="100%" height={150} className='mb-3 rounded-3'/>
            <Shimmer width="100%" height={15} className='mb-3 rounded-3'/>
            <Shimmer width="100%" height={10} className='mb-1 rounded-3'/>
            <Shimmer width="80%" height={10} className='mb-1 rounded-3'/>
            <Shimmer width="75%" height={10} className='mb-3 rounded-3'/>
            <Shimmer width="100%" height={60} className='mb-3 rounded-5'/>
            <Shimmer width="100%" height={60} className='mb-3 rounded-5'/>
            </>
            ))
          ):(
            mcqData.map((item, index)=>(
                <li key={index} className='mb-3'>
                  <div className="video mb-3">
                    <div className="video-header">
                      <a href='/' className="video-icon">
                      <i class="bi bi-play-fill"></i>
                      </a>
                      <img src="https://images.prismic.io/edapp-website/ZDczM2M0ZGQtOGEwYi00ZDVhLWI1MjQtMjIzZjY1NDMxYjNl_training-record-software-png_iaa?auto=compress%2Cformat&rect=10%2C0%2C1340%2C700&w=768&h=627&q=15" alt="video" className='w-100 rounded-3'/>
                    </div>
                    <div className="video-body">
                      <h1 className="fs-4 mt-3">{item.recordings.title}</h1>
                      <small className="text-secondary">{item.recordings.description}</small>

                  <a  href={item.recordings.video}>   <Button variant="contained" className='rounded-5 w-100 mt-3 p-3'>Watch Recordings</Button></a>
                  <a href={`/download/${item.recordings.pdfLink}`}>   <Button variant="outlined" className='rounded-5 w-100 mt-3 p-3'>Download PDF</Button></a>
                    </div>

                    </div>
                  
                </li>
            ))
          )
        }
      </ul>
    </div>
  )
}

export default Video
