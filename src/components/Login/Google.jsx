import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../Database/firebase';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Google() {
    const naviagte = useNavigate();
    const [loading, setLoading] = useState(false)
    const provider = new GoogleAuthProvider();
    const googleAccount = () =>{
        setLoading(true)
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setLoading(false)
    naviagte('/')
    toast.success("successfuly registered")
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    setLoading(false)
    toast.error(error)
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }

  return (
    <div>
      <Button variant="contained" onClick={googleAccount} className='mb-3 w-100  bg-primary'><i class="bi bi-google fs-3 mx-2"></i>Sign in With Google</Button>
    </div>
  )
}

export default Google
