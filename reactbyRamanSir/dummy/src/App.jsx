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

  return (
    <>
      <h1 className="text-3xl font-bold underline">hellow world</h1>
      <Card name="Sakshi" paragraph=" Sakshi Descripting" link="Click here" />
      <Card name="Swarna" paragraph=" Swarnd Descripting" link="Click " />

      <Navbar/>
      <Outlet/>
      <Footer/>


    </>
  );
}

export default App;