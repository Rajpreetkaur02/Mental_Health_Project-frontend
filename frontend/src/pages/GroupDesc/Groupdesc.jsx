import React, {useState, useEffect} from 'react'
import '../../styles/Groupdesc.css'
import Navbar from '../../components/Navbar/Navbar'
import GroupAbout from '../../components/GroupAbout/GroupAbout'
import GroupSidebar from '../../components/GroupSidebar/GroupSidebar'
import { useParams } from 'react-router-dom'
// import groupsData from '../../utils/groupsdata.js';

const Groupdesc = () => {
    const [component, setComponentActive] = useState(<GroupAbout/>);
    const [groupsData, setGroupsData] = useState([]);
    const id = useParams();
    console.log(id);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            fetch(`http://localhost:8080/groups/${id.id}`,{
                crossDomain: true,
                headers: {
                    'Content-Type':'application/json',
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`     
                },    
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setGroupsData(data);
            });
        }
    }, []);

    async function updateMembers(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8080/extra/addDetails',{
            method: 'POST',
            body: JSON.stringify({"type": "member", "userId": localStorage.getItem('id'), "groupId": id.id}),
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`     
            }
        })
        console.log(response.status)
        if (response.status == 200) {
            fetch(`http://localhost:8080/groups/updateGroupMembers/${id.id}`,{
                method: 'PUT',
                crossDomain: true,
                headers: {
                    'Content-Type':'application/json',
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`     
                },    
            })
            alert("Group Joined Successfully")
        } else {
            alert("Already in a Group")
        }
    }

  return (
    <div>
        <Navbar/>
        {/* {groupsData.filter((data) => data.id == id.id)
            .map((data) => ( */}
                <>
                <div className="descheader">
                <div className="descheading">
                    <h1>{groupsData.title}</h1>
                    <p>{groupsData.members}</p>
                    <p>Organized by <span>{groupsData.organizer}</span></p>
                </div>
                <div className='joinbutton'>
                    <button onClick={updateMembers}>Join Group</button>
                </div>
            </div>
            <div className="groupelements">
                <GroupSidebar componentHandler={setComponentActive} />
                    {component}
            </div>
            </>
            {/* ))} */}

    </div>
  )
}

export default Groupdesc
