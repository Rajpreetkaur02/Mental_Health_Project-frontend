import React, { useEffect, useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import "../styles/Navbar.css";
const Navbar = () => {
    const [loggedInUserDetails, setLoggedInUserDetails] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            fetch('http://localhost:8080/current-user',{
                crossDomain: true,
                headers: {
                    'Content-Type':'application/json',
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`     
                },    
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setLoggedInUserDetails({name: data.name, email: data.email});
            });
        }
    }, []);

    function logout() {
        localStorage.removeItem('token');
        setLoggedInUserDetails({name: '', email: ''});
        alert('User Logged Out!')
        window.location.reload();
    }

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
                    <li><NavLink to="/categories">Take A Test</NavLink></li>
                    <li><NavLink to="/resources">Resources</NavLink></li>
                </ul>
            </div>
            {
                localStorage.getItem('token') !== null ? (
                    <div className='navRight'>
                        <ul>
                            <li className='greeting'>Hello ,  {loggedInUserDetails.name}</li>
                            <li className='logout' onClick={logout}>Logout</li>
                        </ul>
                    </div>                
                ) : (
                    <div className='navRight'>
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