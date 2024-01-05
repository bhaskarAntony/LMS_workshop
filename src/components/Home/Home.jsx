import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import './style.css'
import { Avatar, Box, Card, CircularProgress, Grid } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors';
import CountdownTimer from '../time/CountdownTimer';
import { auth } from '../../Database/firebase';
import Header from '../header/Header';

function Home() {
    const [userId, setUserId] = useState("")
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUserId(user.email)
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
  return (
    <section className="home">
       <div className="container-fluid overflow-hidden">
       <div className="row">
            <div className="col-12 col-md-3 m-0 p-0">
                <div className="sidebar p-2">
                        <div className="profile text-center rounded-5 p-3 text-white" >
                            <div className="profile-top d-flex align-items-center justify-content-center mb-3">
                            <Avatar sx={{ bgcolor: deepOrange[800], width: 56, height: 56  }}>{userId?userId[0].toUpperCase(): "U"}</Avatar>
                            </div>
                            <div className="profile-footer">
                                <small className='fs-6 email'>{userId}</small> <br />
                                <small>Student</small>
                            </div>
                        </div>
                        <ul>
                            <li><a href=""><i class="bi bi-house text-main mx-2"></i>Home</a></li>
                            <li><a href=""><i class="bi bi-award-fill text-main mx-2"></i>Webinars</a></li>
                            <li><a href=""><i class="bi bi-clock text-main mx-2"></i>Start Learning</a></li>
                            <li><a href=""><i class="bi bi-journal-album text-main mx-2"></i>Digital Library</a></li>
                            <li><a href=""><i class="bi bi-card-checklist text-main mx-2"></i>Assaignments</a></li>
                            <li><a href=""><i class="bi bi-braces text-main mx-2"></i>Marathons</a></li>
                            <li><a href=""><i class="bi bi-body-text text-main mx-2"></i>Hackathons</a></li>


                        </ul>
                </div>
            </div>
            <div className="col-12 col-md-9 m-0 p-0">
        <div className="dashboard">
        <Header/>
        </div>
               
            </div>
        </div>
       </div>
    </section>
  )
}

export default Home
