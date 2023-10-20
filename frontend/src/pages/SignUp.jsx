import { useState } from 'react';
import React from 'react';
import img from '../assests/TaeAugust05.jpg';

function SignUp() {
    const[showEmergency, setShowEmergency] = useState(false);

    function submitDetails() {
        setShowEmergency(current => !current);
    }

  return (
    <>
    <div className='main'>
    <div className='loginImage'>
            <img src={img} alt=""/>
        </div>
        <div className='details'>
            {!showEmergency && (<>
                <h2>Create an Account</h2>
                <form action="/">
                    <label>Full Name</label>
                    <input type="text" name="name" id="" placeholder='Your Name' required/>
                    <label>Mobile Number</label>
                    <input type="number" id="" placeholder='Enter Your Number' required/>
                    <label>Email</label>
                    <input type="email" name="email" id="" placeholder='Email' required/>
                    <label>Password</label>
                    <input type="password" name="" id="" placeholder='Password' required/>
                    <button type='submit' onClick={submitDetails}>Continue</button>
                </form>
                </>
            )}
            {showEmergency && (<>
                <h2>Emergency Contact Details</h2>
                <form action="/">
                    <label>Emergency Contact Name</label>
                    <input type="text" name="name" id="" placeholder='Emergency Contact Name' required/>
                    <label>Emergency Contact Mobile Number</label>
                    <input type="number" id="" placeholder='Emergency Contact Number' required />
                    <label>Emergency Contact Email</label>
                    <input type="email" name="email" id="" placeholder='Emergency Contact Email' required/>
                    <button type='submit'>Register</button>
                </form>
                </>
            )}
        </div>
        
    </div>
    </>
  )
}

export default SignUp