import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { Shimmer } from 'react-shimmer';

function Users({NumUsers}) {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
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
    const [Randomcolor, setRandomColor] = useState()
    useEffect(() => {
        axios.get(`https://dull-trousers-deer.cyclic.app/api/users/list`)
          .then(response => {
            setLoading(false)
            const limitedUserData = response.data.slice(0, NumUsers);
            setUserData(limitedUserData);  

            console.log(response.data);  
          })
          .catch(error => {
            // Handle errors
            toast.warning( error.message);
            console.log(error)
          });
      }, []);
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
            <th className='firstdata'>Profile</th>
            <th>Name</th>
            <th>Status</th>
        </tr>
        {
          loading?(
            Array(6)
            .fill(null)
            .map((_, index) => (
            <>
           <tr>
            <td> <Shimmer width="100%" height={40} className='mb-3 rounded-3'/></td>
            <td> <Shimmer width="100%" height={40} className='mb-3 rounded-3'/></td>
            <td> <Shimmer width="100%" height={40} className='mb-3 rounded-3'/></td>
           </tr>
           
            </>
            ))
          ):(
            userData.map((item, index) => (
              <tr key={index} className='mb-3'>
                <td className='firstdata'>
                  <div className="name-icon" style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
                    {item.name[0]}
                  </div>
                </td>
                <td><b>{item.name}</b> <br />
                    <small className='text-secondary text-muted'> {item.email}</small> </td>
                <td>                                                                      
                  <BorderLinearProgress variant="determinate" value={1} />
                  <span className='mt-2 d-block text-success'>0%</span>
                </td>
              </tr>
            ))
          )
 
}
      </table>
    </div>
  )
}

export default Users
