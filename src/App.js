
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import {Profile }from './Pages/Profile'
import Contact from './Pages/Contact'
import Navbar from './Pages/Navbar'
import { useState, createContext } from 'react';

export const AppContext = createContext();

const App = () => {
 const [userName,setUsername] = useState("shalom")
  return (
    <div className='App'>
      <AppContext.Provider value={{userName,setUsername}}> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1> Page not found</h1> } />
        </Routes>
      </Router>
      </AppContext.Provider>
      
    </div>
  );
  
};
export default App;
