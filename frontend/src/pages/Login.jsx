import React from 'react';
import {Link} from 'react-router-dom';
import img from '../assets/TaeAugust07.jpg';
import '../styles/Login.css';

function Login() {
  return (
    <div className='main'>
        <div className='details'>
            <h2>Login to your account</h2>
            <form action="/">
                <label>Email</label>
                <input type="email" name="email" id="" placeholder='Email' required/>
                <label>Password</label>
                <input type="password" name="" id="" placeholder='Password' required/>
                <button type='submit'>Sign In</button>
            </form>
            <div className='registerLink'><p>Don't have an account? </p><Link to={{pathname: "/signup"}}>Register here</Link></div>
        </div>
        <div className='loginImage'>
            <img src={img} alt=""/>
        </div>
    </div>
  )
}

export default Login