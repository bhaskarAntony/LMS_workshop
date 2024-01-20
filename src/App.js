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
import Bootcamp from './pages/HomePage/Bootcamp';
import Event from './pages/Event';
import Sidebar from './components/Appbar/Sidebar';
import Appbar from './components/Appbar/Appbar';
import Pdfviewer from './components/Pdfviewer';
import PdfDownload from './pages/PdfDownload';

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
    <div className="App container-fluid p-0 overflow-hidden">
      <Appbar/>
     <div className='row'>
     <div className='col-12 col-sm-12 col-md-2 app-left d-md-block d-none d-sm-none'>
      <Sidebar/>
      </div>
      <div className='col-12 col-sm-12 col-md-10 app-right'>
      <ToastContainer />
      <Router>
        <Routes>
         <Route path="/" element={ <HomePage/>} />
          <Route path="/PDF/:id" element={<NoData />} />
          <Route path="/nopdf" element={<NoData />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/attend/assessment/:id" element={<Test />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recordings/:link" element={<Event />} />
          <Route path="/pdfViewer/:id" element={<Pdfviewer />} />
          <Route path="/download/:id" element={<PdfDownload />} />
        </Routes>
      </Router>
      </div>
     </div>
    </div>
  );
}

export default App;