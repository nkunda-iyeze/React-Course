import {useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
 // fetch("https://catfact.ninja/fact")
  // .then((response) => response.json())
  //   .then((data) => console.log(data));
function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const predictAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setPredictedAge(res.data);
      });
  }
  return (
    <div className='App'>
      <input placeholder='Ex.Shalom' onChange={(event)=> setName(event.target.value)}/>
      <button onClick={predictAge}>Predict Age</button>
      <h1>Predicted Age: {predictedAge?.age} </h1>
      <h1>Name: {predictedAge?.name} </h1>
      <h1>Count: {predictedAge?.count} </h1>
    </div>
  );
  
};
export default App;
