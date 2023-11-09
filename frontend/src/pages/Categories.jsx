import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CategoryCard from '../components/CategoryCard';
import HealthImg from '../assets/mentalHealthImg.png';
import mentalData from '../utils/healthData.js';
import {Link} from 'react-router-dom';
import '../styles/Categories.css';


function Categories() {
    const [mentalActive, setMentalActive] = useState(true);
    const [physicalActive, setPhysicalActive] = useState(false);
    const [isMentalActive, setIsMentalActive] = useState(false);
    const [isPhysicalActive, setIsPhysicalActive] = useState(false);

    const mentalButtonPressed = () => {
        setMentalActive(true);
        setPhysicalActive(false);

        if (isMentalActive) {
            setIsMentalActive(false);
            setIsPhysicalActive(true);
        }
        setIsPhysicalActive(false);
    }

    const physicalButtonPressed = () => {
        setMentalActive(false);
        setPhysicalActive(true);

        if (isPhysicalActive) {
            setIsPhysicalActive(false);
            setIsMentalActive(false);
        } else {
            setIsPhysicalActive(true);
            setIsMentalActive(true);
        }
    }

    return (
        <>
        <Navbar/>
        <div className='categoryMain'>
            <div className='categoryTop'>
                <div className='categoryTopLeft'>
                    <img src={HealthImg} alt=""/>
                </div>
                <div className='categoryTopRight'>
                    <h1>Which category you fall under?</h1>
                    <div className='categoryButtons'>
                        <button onClick={mentalButtonPressed} className={isMentalActive ? 'mentalButton' : ''}>Mental</button>
                        <button onClick={physicalButtonPressed} className={isPhysicalActive ? 'physicalButton' : ''}>Physical</button>
                    </div>
                </div>
            </div>  
            <div className='categoryBottom'>
                {mentalActive ?
                    mentalData
                        .filter((data) => data.type === 'mental')
                        .map((data) => (
                            <Link style={{textDecoration:'none', color:'black'}} to={{pathname: "/questions"}}>
                                <CategoryCard {...data} key={data.id}/>
                            </Link>
                        ))    
                :

                (physicalActive && (
                    mentalData
                        .filter((data) => data.type === 'physical')
                        .map((data) => (
                            <Link style={{textDecoration:'none', color:'black'}} to={{pathname: "/questions"}}>
                                <CategoryCard {...data} key={data.id}/>
                            </Link>
                        ))  
                ))  
                }
            </div>
        </div>
        </>
    )
}

export default Categories