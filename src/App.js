
import './App.css';
// import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import {Profile }from './Pages/Profile'
import Contact from './Pages/Contact'
import Navbar from './Pages/Navbar'
import Form from './Pages/Form';
import Button from './Pages/Button';
import { useState, createContext } from 'react';
import { QueryClient,QueryClientProvider } from 'react-query';
export const AppContext = createContext();

const App = () => {
  const [userName, setUsername] = useState("shalom")
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
      <AppContext.Provider value={{userName,setUsername}}> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path='/form' element={<Form/>} />
          <Route path='/button' element={<Button/>} />
          <Route path="*" element={<h1> Page not found</h1> } />
        </Routes>
      </Router>
      </AppContext.Provider>
      </QueryClientProvider>
      
    </div>
  );
  
};
export default App;
