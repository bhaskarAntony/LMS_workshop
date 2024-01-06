import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

function Users() {
    const [userData, setUserData] = useState([]);
    const [colors, setColors] = useState([
        "#FF9999",
        "#C36A2D",
        "#301E67",
        "#BA52ED",
        "#D9D46F",
        "#8EA6B4",
        "#506F86",
        "#FF8B00",
        "#537EC5",
        "#77628C",
        "#AF8BAF",
        "#FB5660",
        "#F8FE85",
        "#BEB000"
    ])
    const [random, setRandom] = useState();
    const [Randomcolor, setRandomColor] = useState()
    useEffect(() => {
        axios.get(`https://dull-trousers-deer.cyclic.app/api/users/list`)
          .then(response => {
            const limitedUserData = response.data.slice(0, 8);
            setUserData(limitedUserData);  

            console.log(response.data);  
          })
          .catch(error => {
            // Handle errors
            alert('Error uploading data:', error.message);
            console.log(error)
          });
      }, []);
      const options = [
        'Chat',
        'Ask Doubt',
        'Profile',
  
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
        const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
            height: 10,
            borderRadius: 5,
            [`&.${linearProgressClasses.colorPrimary}`]: {
              backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            },
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
              backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
            },
          }));
      
  return (
    <div className='users'>
        
      <table>
        <tr>
            <th>Profile</th>
            <th>NAME</th>
            <th>Status</th>
        </tr>
        {
  userData.map((item, index) => (
    <tr key={index} className='mb-3'>
      <td className='d-flex align-items-center gap-2'>
        {/* Generate a random index within the colors array length */}
        <div className="name-icon" style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
          {item.name[0]}
        </div>
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
      </td>
      <td>{item.name}</td>
      <td>
        <BorderLinearProgress variant="determinate" value={50} />
        <span className='mt-2 d-block text-success'>50%</span>
      </td>
    </tr>
  ))
}
      </table>
    </div>
  )
}

export default Users
