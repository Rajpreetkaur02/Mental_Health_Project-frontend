import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "../styles/Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <div className='navLeft'>
                {/* logo */}
                <Link to="/" className="title">Website</Link>
            </div>
            <div className='navCenter'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/takeatest">Take A Test</NavLink></li>
                    <li><NavLink to="/resources">Resources</NavLink></li>
                </ul>
            </div>
            <div className='navRight'>
                <ul>
                    <li><NavLink to="/login">Log In</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                </ul>
            </div>                
        </nav>
    )
}

export default Navbar;

