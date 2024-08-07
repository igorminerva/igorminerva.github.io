import React from 'react';
import '../assets/style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Profile from './Profile/Profile';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';


const App = () => {
  return (
    
    <BrowserRouter>
      <NavBar />
      <div className="d-flex body">
        <div className="profile-container">
          <Profile />
        </div>
        <div className="content-container flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
