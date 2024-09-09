import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";
import {Outlet}  from 'react-router-dom'
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

//todolist

function App() {
  const [count, setCount] = useState(0);
  const [bcolr, setbcolr] = useState('red');

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">hellow world</h1>
      <Card name="Sakshi" paragraph=" Sakshi Descripting" link="Click here" />
      <Card name="Swarna" paragraph=" Swarnd Descripting" link="Click " /> */}
      <div className="container w-full h-screen " style={{backgroundColor:bcolr}}>
        <div className="w-full h-screen flex justify-center items-center">
        <button onClick={()=>{setbcolr("red")}} style={{backgroundColor:"red",height:"40px",width:'100px',border:'2px solid black'}}>Red</button>
        <button className='bg-yellow-500 h-10 w-24 border-solid border-2 border-sky-500'onClick={()=>{setbcolr('yellow')}} >Yellow</button>
        <button className='bg-green-500 h-10 w-24 border-solid border-2 border-sky-500'onClick={()=>{setbcolr('green')}} >Green</button>
        <button className='bg-pink-500 h-10 w-24 border-solid border-2 border-sky-500' onClick={()=>{setbcolr('pink')}} >Pink</button>
        </div>
      </div>

      {/* <Navbar/>
      <Outlet/>
      <Footer/> */}

    </>
  );
}

export default App;
