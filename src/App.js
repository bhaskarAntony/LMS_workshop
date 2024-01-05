// App.js
import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import NoData from './pages/HomePage/NoData';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<NoData />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
