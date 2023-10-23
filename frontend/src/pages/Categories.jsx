import React, { useState } from 'react';
import '../styles/Categories.css';
import HealthImg from '../assets/mentalHealthImg.png';
import CategoryCard from '../components/CategoryCard';
import mentalData from '../data/healthData.js';
import Navbar from '../components/Navbar';


function Categories() {
    const [mentalActive, setMentalActive] = useState(true);
    const [physicalActive, setPhysicalActive] = useState(false);

    const mentalButtonPressed = () => {
            setMentalActive(true);
            setPhysicalActive(false);
    }

    const physicalButtonPressed = () => {
        setMentalActive(false);
        setPhysicalActive(true);
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
                    <div className='buttons'>
                        <button onClick={mentalButtonPressed} className='mentalButton'>Mental</button>
                        <button onClick={physicalButtonPressed} className='physicalButton'>Physical</button>
                    </div>
                </div>
            </div>  
            <div className='categoryBottom'>
                {mentalActive &&
                    mentalData
                        .filter((data) => data.type === 'mental')
                        .map((data) => (
                            <CategoryCard {...data}/>
                        ))    
                }

                {!mentalActive && physicalActive &&
                    mentalData
                        .filter((data) => data.type === 'physical')
                        .map((data) => (
                            <CategoryCard {...data}/>
                        ))    
                }
            </div>
        </div>
        </>
    )
}

export default Categories