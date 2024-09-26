//go to bootstrap seach nav bar download annd cloick the selected element and covert html to jsx when  rightclicked
//convert a to Link and href to "to"
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/expensetracker">ExpenceTracker</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/swapimage">SwapImage</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/useeffect">UseEffect</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/onchangeformwithradiobutton">OnchangeForm with radio button</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/reducer">Reducer Practice</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default NavBar
