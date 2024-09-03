let x = 10;
//hook: reprint in the website with new values
//     > useState hook const[variable,function]=useState(10)
//> usestate ----render the page when function is called and replace the value is change and component rerender
//      >console.log(variable);
// react hook snippet extension

// >Hooks are functions that are used in functional component only
// >Hooks must be called at the top
// > Hooks are used to update the state of the application

// > usestate
//     > usestate hook is used to store the value and can also used to trigger rerender of component after a period of time
//     > it takes two argument [value ,function] a value and a function

import React, { useState } from "react";

const Counter = () => {
  const [x, setx] = useState(10);
  function increment() {
    setx(x + 1);
  }

  const decrement = () => {
    setx(x - 1);
  };

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
      <h1>this is counter page</h1>
      <p>value: {x}</p>
      <button onlclick={increment}>Increment</button>
      <button onclick={decrement}>Decrement</button>
      <button onclick={multiplyby2}>multiplyby2</button>
      <button onclick={devideby2}>devideby2</button>
      <button onclick={multiplyby5}>multiplyby5</button>
    </div>
  );
};

export default Counter;
