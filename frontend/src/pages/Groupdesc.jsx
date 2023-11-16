import React, {useState} from 'react'
import '../styles/Groupdesc.css'
import Navbar from '../components/Navbar'
import GroupAbout from '../components/GroupAbout'
import GroupSidebar from '../components/GroupSidebar'
import { useParams } from 'react-router-dom'
import groupsData from '../utils/groupsdata.js';

const Groupdesc = () => {
    const [component, setComponentActive] = useState(<GroupAbout/>);
    const id = useParams();
    console.log(id);

  return (
    <div>
        <Navbar/>
        {groupsData.filter((data) => data.id == id.id)
            .map((data) => (
                <>
                <div className="descheader">
                <div className="descheading">
                    <h1>{data.title}</h1>
                    <p>{data.members}</p>
                    <p>Organized by <span>{data.organizer}</span></p>
                </div>
                <div className='joinbutton'>
                    <button>Join Group</button>
                </div>
            </div>
            <div className="groupelements">
                <GroupSidebar componentHandler={setComponentActive} />
                    {component}
            </div>
            </>
            ))}

    </div>
  )
}

export default Groupdesc
