import React from 'react'
import CounterContex from './CounterContext'
import { useState } from 'react';

const CounterState = (props) => {
    const [count, setcount] = useState(0);
  return (
    <CounterContex.Provider value={{count,setcount}}>
    {props.children}
    </CounterContex.Provider>
  )
}

export default CounterState