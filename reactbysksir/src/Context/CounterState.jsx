import React from 'react'
import CounterContext from './CounterContext'
import { useState } from 'react';

const CounterState = (props) => {
    const [count, setcount] = useState(0);
  return (
    <CounterContext.Provider value={{count,setcount}}>
        {props.children}
    </CounterContext.Provider>
  )
}

export default CounterState