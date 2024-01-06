import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import './style.css'
import { Avatar, Box, Button, Card, CircularProgress, Grid, TextField } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors';
import CountdownTimer from '../time/CountdownTimer';
import { auth } from '../../Database/firebase';
import Header from '../header/Header';
import Appbar from '../Appbar/Appbar';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import Mcqs from '../Cards/Mcqs';
import MainVideo from '../Cards/MainVideo';
import Video from '../Cards/Videos';
import Users from '../Cards/Users';
import Sidebar from '../Appbar/Sidebar';
import Questions from '../Cards/Questions';

function Home() {
    const [userId, setUserId] = useState("")
    const [userData, setUserdata] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const user = await new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
              resolve(user);
              unsubscribe(); // Unsubscribe to avoid memory leaks
            });
          });
    
          if (user) {
            setUserId(user);
            console.log("uid", user.uid); // Log the user ID after setting it
          } else {
            console.log("user is logged out");
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      };
    
      fetchData();
    }, [])
   

    useEffect(() => {
      axios.get(`https://dull-trousers-deer.cyclic.app/api/lmsUser/iTYwnxtDwiXNF9GMIJUmLBgqgp52`)
        .then(response => {
          setUserdata(response.data);  // Update to response.data
          console.log(response.data);  // Log the actual data
        })
        .catch(error => {
          // Handle errors
          alert('Error uploading data:', error.message);
          console.log(error)
        });
    }, []);
   
    
    const [chartData, setChartData] = useState({
      series: [44, 55, 67, 83],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: (w) => {
                  // By default, this function returns the average of all series. The below is just an example to show the use of a custom formatter function
                  return "90%";
                },
              },
            },
          },
        },
        labels: ['Basics', 'Adwanced', 'day1', 'day2'],
      },
    });
    const [LmsuserData, setLmsUserData] = useState([]);

  return (
    <section className="home">
       <div className="container-fluid overflow-hidden">
       <div className="row">
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0  d-lg-block d-none d-sm-none d-md-block">
                <Sidebar/>
            </div>
            <div className="col-12 col-md-9 col-lg-10 m-0 p-0 bg-light">
        <div className="dashboard">
        {/* <Header/> */}
        <Appbar/>
        <div className="dashboard-body p-3">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mb-2 mb-4">
              <div className="workshop-card card1 h-100 p-3">
                <div className="row align-items-center h-100">
                  <div className="col-10 col-sm-9 col-md-8 d-flex flex-column justify-content-between">
                   <div>
                   <h1 className="fs-4 text-white">Java fullstack development</h1>
                    <p className='text-light'>Acquire valuable, hands-on insights to launch your career in java fullstack development effectively</p>
                  </div>
                  <hr />
                  <div className="speaker d-flex gap-2 align-items-center text-white">
                    <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704412800&semt=ais" alt="avathar" />
                    <div>
                      <span className='d-block fs-4 fw-bold'>Atul</span>
                      <small className="text-light fw-light">Java trainer</small>
                    </div>
                  </div>
                   </div>
                  <div className="col-2 col-sm-3 col-md-4">
                  <img src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-1.png" alt="image" className="w-100"  />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-6 col-md-3 mb-4">
              <div className="card1 h-100 library">
               
                <div className="d-flex h-100 flex-column justify-content-between align-items-center p-2 align-items-center">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/e-library-6848261-5607048.png?f=webp" alt="" className="w-100" />
                    <h1 className="fs-4 text-center">Digital library</h1>
                   </div>
              </div>
            </div>
            <div className="col-8 col-sm-6 col-md-3 mb-4">
              <div className="card1 progress h-100 d-flex align-items-center justify-content-center">
              <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={250} />
    </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-7 mb-4">
              <div className="card1 h-100 d-flex flex-column justify-content-between mcq">
                <Mcqs/>
                <div className="text-center">
                <Button variant="outlined" className='rounded-5'>View All</Button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 mb-4">
              <div className="card1 h-100">
                <Video/>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 mb-4">
              <div className="card1 h-100">
               <Questions/>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 mb-4">
              <div className="card1 h-100">
               <div className="user-top d-flex align-items-center justify-content-between">
                <h1 className="fs-4">Your Friends</h1>
                <div className="users-search d-flex gap-2 align-items-center">
                  <label htmlFor="search">Search:</label>
                  <TextField id="outlined-basic" label="Search for devs" variant="outlined" id="search"/>
                </div>
               </div>
               <hr />
               <Users/>
               <div className="text-center mt-4">
                <Button variant="outlined" className='rounded-5'>View All</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
               
            </div>
        </div>
       </div>
    </section>
  )
}

export default Home
