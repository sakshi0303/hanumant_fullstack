import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './Pages/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Pages/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
