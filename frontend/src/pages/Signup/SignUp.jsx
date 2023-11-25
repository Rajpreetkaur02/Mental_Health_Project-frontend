import { useState } from 'react';
import React from 'react';
import img from '../../assets/TaeAugust05.jpg';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function SignUp() {
    const[showEmergency, setShowEmergency] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: '',
        number: '',
        email: '',
        password: ''
    });
    const [emergencyDetails, setEmergencyDetails] = useState({
        name: '',
        number: '',
        email: ''
    });

    const navigate = useNavigate();

    function handleUserInputChange(e) {
        const {name, value} = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    }

    function handleEmergencyInputChange(e) {
        const {name, value} = e.target;
        setEmergencyDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    }

    function saveDetails(e) {
        e.preventDefault();
        setShowEmergency(current => !current);
        console.log(userDetails);
    }

    async function submitDetails(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/user/register',{
            method: 'POST',
            body: JSON.stringify({"name": userDetails.name, "number": userDetails.number, "username": userDetails.email, "password": userDetails.password, "emergencyContact": {"name": emergencyDetails.name, "number": emergencyDetails.number, "email": emergencyDetails.email}}),
            headers: {'Content-Type':'application/json'}
        });  
        if (response.status === 200) {
            swal({
                title: "Registered!",
                text: "You have registered successfully!",
                icon: "success",
                button: "Ok",
              });
            fetch("http://localhost:8080/generate-token", {
                method: 'POST',
                crossDomain: true,
                body: JSON.stringify({'username': userDetails.email, 'password': userDetails.password}),
                headers: {
                    'Content-Type':'application/json',
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true"
                }
            }).then((res) => res.json())
            .then((data) => {
            if (data.token !== "") {
                window.localStorage.setItem("token", data.token);
                navigate("/categories");
            } else {
                swal ( "Wrong Credentials" ,  "Something went wrong!" ,  "error" )
            }
        });
            navigate("/login");
            
        } else {
            swal({
                title: "User Already Registered!",
                button: "Ok",
            });
        }
    }

  return (
    <>
    <Navbar/>
    <div className='main'>
    <div className='loginImage'>
            <img src={img} alt=""/>
        </div>
        <div className='details'>
            {!showEmergency && (<>
                <h2>Create an Account</h2>
                <form onSubmit={saveDetails}>
                    <label>Full Name</label>
                    <input value={userDetails.name} onChange={handleUserInputChange} type="text" name="name" id="" placeholder='Your Name' required/>
                    <label>Mobile Number</label>
                    <input value={userDetails.number} maxLength={10} onChange={handleUserInputChange} type="number" name="number" id="" placeholder='Enter Your Number' required/>
                    <label>Email</label>
                    <input value={userDetails.email} onChange={handleUserInputChange} type="email" name="email" id="" placeholder='Email' required/>
                    <label>Password</label>
                    <input value={userDetails.password} onChange={handleUserInputChange} type="password" name="password" id="" placeholder='Password' required/>
                    <button type='submit'>Continue</button>
                </form>
                </>
            )}
            {showEmergency && (<>
                <h2>Emergency Contact Details</h2>
                <form onSubmit={submitDetails}>
                    <label>Emergency Contact Name</label>
                    <input value={emergencyDetails.name} onChange={handleEmergencyInputChange} type="text" name="name" id="" placeholder='Emergency Contact Name' required/>
                    <label>Emergency Contact Mobile Number</label>
                    <input value={emergencyDetails.number} onChange={handleEmergencyInputChange} type="number" name="number" id="" placeholder='Emergency Contact Number' required />
                    <label>Emergency Contact Email</label>
                    <input value={emergencyDetails.email} onChange={handleEmergencyInputChange} type="email" name="email" id="" placeholder='Emergency Contact Email' required/>
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