import {useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
 // fetch("https://catfact.ninja/fact")
  // .then((response) => response.json())
  //   .then((data) => console.log(data));
function App() {
  const [catfact, setCatFact] = useState("")
  const fetchCatData = () => {
    Axios.get("https://catfact.ninja/fact")
    .then((responce) => setCatFact(responce.data.fact));
  }
  useEffect(() => {
    fetchCatData();
  },[]);
  return (
    <div className='App'>
      <button onClick={fetchCatData}>Generate Quotes</button>
      <p>{catfact}</p>
    </div>
  );
  
};
export default App;
