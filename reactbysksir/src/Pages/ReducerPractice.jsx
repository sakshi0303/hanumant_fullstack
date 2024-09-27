// USE REDUCER-------Reducer hook (urdh) ------------->>>>>>>>

// >with one hook it perform multiple actions
// >useReducer in react is alternate and better version of use State
// >reducer function can be intitalised above component
// >it has 2 arguemnet current state, function dispatch and by default  state value
//     cosnt [state,dispatch ]=use Reducer(reducers,{count:0})
//     cosnt reducers=(state,action)=>{
//     if actin--"increment"{
//     }
//     }

// >button onclick={()=>dispatch('increment')}
// >reducer will always return  (important) --> it will replace the initial state


// >redux toolkit ;; work mainly with reducer
// usememo, usecallback-- 

/// redux toolkit quick start

import React, { useReducer } from 'react'

const reducer=(state,action)=>{
    if (action.type==='increment'){
        return {...state,count:state.count+1}
    }
    if (action.type==='decrement'){
        return {...state,count:state.count-1}
    }
    if (action.type==='delete'){
        console.log('inside detete',action.payload);
        let copyarr=[...state.arr]
        copyarr.splice(action.payload,1)
        console.log(copyarr)
        return {...state,arr:copyarr}
    }

    //break is not needed as we are return 
    // switch(action.type){
    //     case 'delete':
    //         let copyarr=[...state.arr]
    //         copyarr.splice(action.payload,1)
    //         console.log(copyarr)
    //         return {...state,arr:copyarr}
    //         break;
    //     default:
    //         return {...state}
    // }

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
        <h3>Use Reduce hook (state,dispatch,action,reducer,obj)</h3>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <p>{state.count}</p>

        
            {state.arr.map((ele,i)=>{
                return <div key={i} className='d-flex gap-2'>
                    <p>Name:{ele.name}, Price:{ele.price}, Location:{ele.location} </p>
                    <p><button  onClick={()=>{dispatch({payload:i,type:'delete'})}} className='btn btn-danger'> Delete</button></p>
                </div>
            })}
  

    </div>
  )
}

export default ReducerPractice