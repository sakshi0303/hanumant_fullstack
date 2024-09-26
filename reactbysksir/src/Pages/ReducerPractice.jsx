import React, { useReducer } from 'react'

const reducer=(state,action)=>{
    if (action.action==='increment'){
        return {...state,count:state.count+1}
    }
    if (action.action==='decrement'){
        return {...state,count:state.count-1}
    }

}

const ReducerPractice = () => {

    let initalstate={
        count:0,
        arr:[
            {
                name:'sakshi',
                price:30,
                location:'lucknow'
            },
            {
                name:'swarna',
                price:40,
                location:'banglore'

            },
            {
                name:'ruchi',
                price:90,
                location:'delhi'

            }
        ]
    }


    const [state, dispatch] = useReducer(reducer, initalstate);


  return (

    
    <div>
        <button onClick={()=>dispatch({action:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({action:'decrement'})}>Decrement</button>
        <p>{state.count}</p>

    </div>
  )
}

export default ReducerPractice