import React, {useState, useEffect} from 'react'
import GroupAbout from '../GroupAbout/GroupAbout';
import GroupEvents from '../GroupEvents/GroupEvents';
import GroupReviews from '../GroupReviews/GroupReviews';
import '../../styles/Groupdesc.css'
import { useParams } from 'react-router-dom';



const GroupSidebar = ({componentHandler}) => {
    const [active, setActive] = useState('GroupAbout');
    const [about, setAbout] = useState('');
    const id = useParams();
    console.log(id);
    // console.log(about);

    useEffect(() => {
      if (localStorage.getItem('token') !== null) {
          fetch(`http://localhost:8080/groups/${id.id}`, {
              crossDomain: true,
              headers: {
                  'Content-Type': 'application/json',
                  Accept: "application/json",
                  "Access-Control-Allow-Origin": "*",
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              },
          })
              .then((res) => res.json())
              .then((data) => {
                  console.log(data);
                  setAbout(data.about);
              });
      }
  }, []);

  return (
    <div className='groupelements'>
      <ul>
        <li onClick={() => {componentHandler(<GroupAbout data={about}/>); setActive('GroupAbout')}} className={` ${active === 'GroupAbout' ? `` : ''}`}>
             About
        </li>

        <li onClick={() => {componentHandler(<GroupEvents/>); setActive('Plan')}} className={` ${active === 'Plan' ? `` : ''}`}>
            Events
        </li>

        <li onClick={() => {componentHandler(<GroupReviews/>); setActive('MoodTracker')}} className={` ${active === 'MoodTracker' ? `` : ''}`}>
            Reviews
        </li>
      </ul>
    </div>
  )
}

export default GroupSidebar

