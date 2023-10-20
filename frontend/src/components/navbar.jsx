// cd frontend
// npm start

import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import "../styles/navbar.css"
const navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false)
  return <nav>
    <Link to="/" className="title">Website</Link>
    <div className="menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/takeatest">Take A Test</NavLink>
      </li>
      <li>
        <NavLink to="/resources">Resources</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    
    </ul>
  </nav> ;(
    <div>

    </div>
  )
}

export default navbar
