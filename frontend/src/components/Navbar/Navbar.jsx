import React, { useEffect, useState } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import "./Navbar.css";
import { FaRegCircleUser } from "react-icons/fa6";
import swal from 'sweetalert'
import Logo from '../../assets/logo.png'

const Navbar = ({isHomePage}) => {
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        swal({
            title: "User Logged out",
            icon: "success",
        });
        window.location.reload();
    }

    function goToDash() {
        navigate("/dashboard")
    }

    return (
        <nav className={`navbar ${isHomePage ? 'homepage-navbar' : ''}`}>
            <div className='navLeft'>
                {/* logo */}
<<<<<<< HEAD
=======
                <img src={Logo} width={60}/>
>>>>>>> 8da28f36e6eb400975d4fee1ed03a2d8c8aa961f
                <Link to="/" className={`${isHomePage ? 'homepage-title' : 'title'}`}>MindWell</Link>
            </div>
            <div className={`${isHomePage ? 'homepage-navCenter' : 'navCenter'}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/categories">Take A Test</NavLink></li>
                    <li><NavLink to="/get-counselling">Get Counselling</NavLink></li>
                    <li><NavLink to="/resources">Resources</NavLink></li> 
                    <li><NavLink to="/blogs">Blogs</NavLink></li> 
                    <li><NavLink to="/community">Community</NavLink></li>
                </ul>
            </div>
            {
                localStorage.getItem('token') !== null ? (
                    <div className={`${isHomePage ? 'homepage-navRight' : 'navRight'}`}>
                        <ul>
                            <li title='Go To Dashboard' className={`${isHomePage ? 'homepage-dashIcon' : 'dashIcon'}`} onClick={goToDash}><FaRegCircleUser size={20}/></li>
                            <li className={`${isHomePage ? 'homepage-greeting' : 'greeting'}`}>Hello,  {localStorage.getItem('name')}</li>
                            <li className={`${isHomePage ? 'homepage-logout' : 'logout'}`} onClick={logout}>Logout</li>
                        </ul>
                    </div>                
                ) : (
                    <div className={`${isHomePage ? 'homepage-navRight' : 'navRight'}`}>
                        <ul>
                            <li><NavLink to="/login">Log In</NavLink></li>
                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                        </ul>
                    </div>                
                )
            }
        </nav>
    )
}

export default Navbar;