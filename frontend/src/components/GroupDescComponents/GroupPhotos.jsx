import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const GroupPhotos = () => {
  const [groups, setgroups] = useState([]); 
  const [isMember, setMember] = useState(false);

  const id = useParams();
  console.log(id)

  

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/extra/getJoinedGroups/${localStorage.getItem('id')}`,{ 
        crossDomain: true, 
        headers: { 'Content-Type':'application/json', 
          Accept: "application/json", 
          "Access-Control-Allow-Origin": "*", 
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        } 
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json()
      .then((data) => {
        console.log(data);
        setgroups(data);
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => { 
    fetchData();
  },[]) 

  return (
    <div>
      
    </div>
  )
}

export default GroupPhotos
