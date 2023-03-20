import {useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Navbar from './Pages/Navbar'
function App() {
 
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1> Page not found</h1> } />
        </Routes>
      </Router>
    </div>
  );
  
};
export default App;
