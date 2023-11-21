import React, { useState, useEffect } from 'react';

const GroupDashboard = ({groupId}) => {
    const [groupDetails, setGroupDetails] = useState([]);

    
    console.log(JSON.parse(groupId));
    
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/groups/${JSON.parse(groupId)}`, {
                        crossDomain: true,
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: "application/json",
                            "Access-Control-Allow-Origin": "*",
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                    });
                    const result = await response.json()
                    .then((data) => {
                        console.log(data)
                        setGroupDetails(data)
                    })
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
    },[groupId]);
    // console.log(groupDetails)

  return (
    <div>
        {groupDetails ? (
        <div className="dashsupportcontainer">
            <div>{groupDetails.title}</div>
            <div>{groupDetails.members}</div>
        </div>
        ) : (
            <p>Loading</p>
        )
            
        }
      
    </div>
  )
}

export default GroupDashboard
