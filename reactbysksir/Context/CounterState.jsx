import React from 'react'
import CounterContext from './CounterContext'

const CounterState = (props) => {
    const [count, setcount] = useState(0);
  return (
    <CounterContext.Provider value={{count,setcount}}>
        {props.children}
    </CounterContext.Provider>
  )
}

export default CounterState