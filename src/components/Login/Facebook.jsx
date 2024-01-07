import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../Database/firebase';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';

function Facebook() {
    const [loading, setLoading] = useState(false)
    const provider = new FacebookAuthProvider();
    const FacebookAccount = () =>{
        setLoading(true)
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setLoading(false)
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
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
    }

  return (
    <div>
      <Button variant="contained" onClick={FacebookAccount}>Sign in With Facebook</Button>
    </div>
  )
}

export default Facebook
