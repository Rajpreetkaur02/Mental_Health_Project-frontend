import React, { useState } from 'react'
import '../styles/Community.css'
import Navbar from '../components/Navbar'
import Support from '../assets/support.png';
import groupsData from '../utils/groupsdata.js';
import GroupCard from '../components/GroupCard.jsx';
import {Link, useParams} from 'react-router-dom';

const Community = () => {
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
    <div>
      <Navbar/>
      <div className='communityMain'>
                <div className='communityTop'>
                    <div className='communityTopLeft'>
                        <img src={Support} alt=""/>
                    </div>
                    <div className='communityTopRight'>
                        <h1>Join A Mental Health Support Group</h1>
                        <p>Meet other people interested in Mental and Physical Health Support: share experiences, inspire and encourage each other! Join a Mental Health Support group.</p>
                        <div className="supportmembers">
                            <div className="supportmembersleft">12000 members</div>
                            <div className="supportmembersright">21 groups</div>
                        </div>
                        <h2>Which support group you would like to join?</h2>
                        <div className='categoryButtons'>
                            <button onClick={mentalButtonPressed} className={isMentalActive ? 'mentalButton' : ''}>Mental</button>
                            <button onClick={physicalButtonPressed} className={isPhysicalActive ? 'physicalButton' : ''}>Physical</button>
                        </div>
                    </div>
                </div>  
                <div className='communityBottom'>
                {mentalActive ?
                        groupsData
                            .filter((data) => data.type === 'mental')
                            .map((data) => (
                                <Link style={{textDecoration:'none', color:'black'}} to={{pathname: `/groupdesc/${data.id}`}}>
                                    <GroupCard {...data} key={data.id}/>
                                </Link>
                            )) :

                    (physicalActive && (
                        groupsData
                            .filter((data) => data.type === 'physical')
                            .map((data) => (
                                <Link style={{textDecoration:'none', color:'black'}} to={{pathname: `/groupdesc/${data.id}`}}>
                                    <GroupCard {...data} key={data.id}/>
                                </Link>
                            ))  
                        ))  
                    } 
                </div>
            </div>
    </div>
  )
}

export default Community
