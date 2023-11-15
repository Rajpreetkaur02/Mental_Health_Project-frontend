import React, {useState} from 'react'
import '../styles/Groupdesc.css'
import Navbar from '../components/Navbar'
import GroupAbout from '../components/GroupAbout'
import GroupSidebar from '../components/GroupSidebar'

const Groupdesc = () => {
    const [component, setComponentActive] = useState(<GroupAbout/>);
  return (
    <div>
        <Navbar/>
        <div className="descheader">
            <div className="descheading">
                <h1>Delhi Depression Support Group</h1>
                <p>232 members</p>
                <p>Organized by <span>Rajpreet</span></p>
            </div>
            <div className='joinbutton'>
                <button>Join Group</button>
            </div>
        </div>
        <div className="groupelements">
            <GroupSidebar componentHandler={setComponentActive} />
                {component}
        </div>

    </div>
  )
}

export default Groupdesc
