//edamam.com :registerd -Project choose your plan: Reciepe Search Api Developer
// useeffect takes 2 callback funciton and array
// it will execute once time only if array of dependency is blacl []
// useeffect can execute one time or multiple time as per dependency array
// if array is empty it will execute only once
// useeffect hook is used to run side effects such as updating the DOM ,fetching API's,etc
// useeffect takes 2 arguments a callback function and a array of dependancy
// if array of dependacny is blank useEffect hook will run only one time
// you can use useEffect hook again if it's dependency change
// cretae react aap
// useeffect happens as a side effect 
    //>side effects happens due to result changing
// whenever a api is created a fucntion is creates
// setitem will re-render(print) the Component and fucntion is called again --> Page goes to infinte loop
import React,{useState,useEffect} from 'react'
import TrailApi from './TrailApi';


const EffectsHooks = () => {
    const [clicked, setclicked] = useState(false);
    console.log(clicked);

    //if empty array it will execute only once
    useEffect(()=>{
        console.log("inside useellecft when array is empty false is show once");
    },[])

    //if array has clicked dependency then it will run twice
    useEffect(()=>{
        console.log("inside useellecft when array has clicked false will show twice");

    },[clicked])
    
  return (
    <div>
       <button onClick={()=>{setclicked(!clicked)}}>useefeect</button>
       <TrailApi/>
    </div>
  )
   

    
}

export default EffectsHooks