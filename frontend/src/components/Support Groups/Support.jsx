import React from 'react'
import { useState, useEffect } from 'react';
import './Support.css'

const Support = () => {

    const [groups, setgroups] = useState([]); 

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

      const fetchGroupData = async (data) => {
        try {
          const response = await fetch(`http://localhost:8080/groups/${data}`,{ 
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
          })
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

  return (
    <div>
        <div className="supportgrpcontainer">
            <h3>Your Support Groups</h3>
            
        </div>
    </div>
  )
}

export default Support
