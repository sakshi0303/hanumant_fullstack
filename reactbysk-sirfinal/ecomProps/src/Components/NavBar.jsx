import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>NavBar 
        <Link to ='/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/contact'>Contact</Link>
        <Link to ='/product'>Product-Details</Link>
    </div>
  )
}

export default NavBar