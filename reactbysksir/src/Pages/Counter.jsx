//hook: reprint in the website with new values
//     > useState hook const[variable,function]=useState(10)
//> usestate ----render the page when function is called and replace the value is change and component rerender
//      >console.log(variable);
// react hook snippet extension

// >Hooks are functions that are used in functional component only
// >Hooks must be called at the top
// > Hooks are used to update the state of the application
// localhost:3030
// > usestate
//     > usestate hook is used to store the value and can also used to trigger rerender of component after a period of time
//     > it takes two argument [value ,function] a value and a function

import React from 'react'
import { useState } from 'react';

const Counter = () => {

  const [x,setx]=useState(10);
  function increment(){
    //console.log("inside incremetn fn");
    setx(x+1)
  }
  const decrement=()=>{
    setx(x-1)
  }

  const multiplyby2 = () => {
    setx(x * 2);
  };

  const multiplyby5 = () => {
    setx(x * 5);
  };

  const devideby2 = () => {
    setx(x / 2);
  };
  
  return (
    <div>
      <h1>this is Counter Page</h1>
      <p>value x ={x}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={multiplyby2}>multiplyby2</button>
      <button onClick={devideby2}>devideby2</button>
      <button onClick={multiplyby5}>multiplyby5</button>
    </div>
  )
}

export default Counter