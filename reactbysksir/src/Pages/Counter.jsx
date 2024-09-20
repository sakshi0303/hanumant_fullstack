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
import { useContext } from 'react';
import { useState } from 'react';
import CounterContext from '../Context/CounterContext';


const Counter = () => {

  let ctx=useContext(CounterContext)
  // function increment(){
  //   //console.log("inside incremetn fn");
  //   setx(x+1)
  // }
  // const decrement=()=>{
  //   setx(x-1)
  // }

  // const multiplyby2 = () => {
  //   setx(x * 2);
  // };

  // const multiplyby5 = () => {
  //   setx(x * 5);
  // };

  // const devideby2 = () => {
  //   setx(x / 2);
  // };
  
  return (
    <div>
      <h1>this is Counter Page</h1>
      <p>value x ={ctx.count}</p>
      <button onClick={()=>ctx.setcount(ctx.count+1)}>Increment</button>
      <button onClick={()=>ctx.setcount(ctx.count-1)}>Decrement</button>
      <button onClick={()=>ctx.setcount(ctx.count*2)}>multiplyby2</button>
      <button onClick={()=>ctx.setcount(ctx.count/2)}>devideby2</button>
      <button onClick={()=>ctx.setcount(ctx.count*5)}>multiplyby5</button>
    </div>
  )
}

export default Counter
