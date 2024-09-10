import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Navbar from './Components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      welcome
      <UserContextProvider>
        <Navbar/>
        <Outlet/>
      </UserContextProvider>
        
    </>
  )
}

export default App
