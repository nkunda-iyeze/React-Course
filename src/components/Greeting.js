import React from 'react'

// function Greeting() {
//   return (
//       <div>
//         <h1>Hello Shalom</h1>
//     </div>
//   )
// }
const Greeting = (props) => {
    return (
        <div>    
            <h1>Hello World {props.name} </h1>
       </div> 
    );
};


export default Greeting