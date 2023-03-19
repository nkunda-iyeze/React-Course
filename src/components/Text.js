import {useEffect, useState } from 'react'

const Text = () => {
    const [text, setText] = useState("");
    useEffect(() => {
       console.log("Component Mounted");
       return () => {
           console.log("Componet Unmounted");
       };
  },[]);
    const handleText = (event) => {
        setText(event.target.value)
    }
    return (
        <div className='App'>
            <input onChange={handleText}/>
            <h1>{text}</h1>
        </div>
    );
};
export default Text;