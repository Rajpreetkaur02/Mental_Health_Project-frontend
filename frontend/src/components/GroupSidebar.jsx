import React, {useState} from 'react'
import GroupAbout from './GroupAbout';
import GroupEvents from './GroupEvents';
import GroupPosts from './GroupPosts';
import '../styles/Groupdesc.css'


const GroupSidebar = ({componentHandler}) => {
    const [active, setActive] = useState('GroupAbout');
  return (
    <div className='groupelements'>
      <ul>
        <li onClick={() => {componentHandler(<GroupAbout/>); setActive('GroupAbout')}} className={` ${active === 'GroupAbout' ? `` : ''}`}>
             About
        </li>

        <li onClick={() => {componentHandler(<GroupEvents/>); setActive('Plan')}} className={` ${active === 'Plan' ? `` : ''}`}>
            Events
        </li>

        <li onClick={() => {componentHandler(<GroupPosts/>); setActive('MoodTracker')}} className={` ${active === 'MoodTracker' ? `` : ''}`}>
            Posts
        </li>
      </ul>
    </div>
  )
}

export default GroupSidebar
