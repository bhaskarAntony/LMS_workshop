// Login.js
import React, { useState } from 'react';
import { auth, database } from '../../Database/firebase';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { Button, TextField } from '@mui/material';
import './style.css'
import signUpImage from '../images/business-idea.svg'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            //  // Save additional user details to the database
            //     database.ref(`users/${user.uid}`).set({
            //         email: user.email,
            //         // Add more details as needed
            //     });
            console.log(user);
            alert("created")
            navigate('/signin')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
      } catch (error) {
        alert(error.message);
      }
    };
  
    return (
        <div className='login-container container'>
        <div className="row">
        <div className="col-12 col-md-6">
        <img src={signUpImage} alt="login-image" className="w-100" />
      </div>
        <div className="col-12 col-md-6">
         <div className="login-card p-3">
         <h2>Create New Account</h2>
         <div className="mt-3">
        <label>Username</label>
         <TextField fullWidth label="Your Name" id="fullWidth" type="text" className='mt-2' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mt-3">
        <label>Email</label>
         <TextField fullWidth label="Your Email" id="fullWidth" type="email" className='mt-2' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mt-3">
        <label>Password</label>
         <TextField fullWidth label="Your Password" id="fullWidth" type="password" className='mt-2' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <p className='mt-2'>Do you have Already Account? <a href="/signin">Sign in</a></p>
         <Button variant="contained" onClick={handleLogin} className='w-100 mt-3 p-3'>Create Account</Button>
         </div>
         </div>
        </div>
       </div>
    );
  };
  
  export default SignUp;