import React, { useEffect, useState } from 'react'
import Home from '../../components/Home/Home'
import Test from '../../components/Home/Test'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Database/firebase';
import NoUser from './NoUser';
import Dashboard from '../../lmsComponents/Pages/Dashbord/Dashboard';

function HomePage() {
  const [userId, setUserId] = useState("")
  const [myuser, setMyUser] = useState(false)
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
          setMyUser(true);
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
  const navigate = useNavigate();
  return (
    <div>
    {
      myuser?(
        // <Home/>
        <Dashboard/>
      ):(
       <NoUser/>
      )
    }
    </div>
  )
}

export default HomePage
