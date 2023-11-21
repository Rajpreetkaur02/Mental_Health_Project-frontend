import React from 'react'
import { useState, useEffect } from 'react';

const GroupDashboard = (props) => {
    const [groupDetails, setGroupDetails] = useState([]);

    const groupId = props.data;
    console.log(groupId);
    
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            fetch(`http://localhost:8080/groups/${groupId}`, {
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
                    setGroupDetails(data);
                });
        }
    }, []);

  return (
    <div>
        <div className="dashsupportcontainer">
        </div>
      
    </div>
  )
}

export default GroupDashboard
