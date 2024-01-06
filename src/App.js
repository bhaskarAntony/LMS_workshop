// App.js
import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import NoData from './pages/HomePage/NoData';
import Test from './components/Home/Test';
import { auth } from './Database/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
  return (
    <div className="App">
       <ToastContainer />
      <Router>
        <Routes>
         <Route path="/" element={<HomePage />} />
          <Route path="/download/:link" element={<NoData />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/attend/assessment/:id" element={<Test />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
