import React, { useEffect, useState } from 'react'; 
import './MoodTracker.css'; 
import {formatISO9075, formatISO} from 'date-fns';

const MoodTracker = () => { 
  const [mood, setMood] = useState('😐 Neutral'); 
  const [moodHistory, setMoodHistory] = useState([]); 
  const [loading, setLoading] = useState(false);

  const handleMoodChange = async (newMood) => { 
    setMood(newMood); 
    console.log(mood) 
    console.log(moodHistory) 
  
    await fetch(`http://localhost:8080/extra/addMood/${localStorage.getItem('id')}`,{ 
      method: 'PUT', 
      headers: { 
        'Content-Type':'application/json', 
        Accept: "application/json", 
        "Access-Control-Allow-Origin": "*", 
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }, 
      body: JSON.stringify({"mood": newMood, "timestamp": formatISO9075(new Date())}), 
    }); 
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/extra/getMood/${localStorage.getItem('id')}`,{ 
        crossDomain: true, 
        headers: { 
          'Content-Type':'application/json', 
          Accept: "application/json", 
          "Access-Control-Allow-Origin": "*", 
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "MyDate": formatISO(new Date(), { representation: 'date' })
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json()
      .then((data) => {
        console.log(data)
        setMoodHistory(data) 
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => { 
    fetchData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  },[]) 
  
  return ( 
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
      <div className="mood-tracker">
        <h3>How are you feeling?</h3>
        <div className="mood-buttons">
          <button onClick={() => handleMoodChange('😊 Happy')}>😊 Happy</button>
          <button onClick={() => handleMoodChange('😐 Neutral')}>😐 Neutral</button>
          <button onClick={() => handleMoodChange('😞 Sad')}>😞 Sad</button>
        </div>
        <div className="mood-history">
          <h3>Mood History</h3>
          {moodHistory.length !== 0 ? (
            <ul className='listMoodHistory'>
              {moodHistory.map((entry, index) => (
                <li key={index}>
                  <strong>{entry.mood}</strong><br/> on {entry.timestamp}
                  <hr style={{marginTop: '10px'}}/>
                </li>
              ))}
            </ul>
          ) : (
            <ul className='listMoodHistory'>
              <li>No Record!</li>
            </ul>
          )}
        </div>
      </div>
    )}
  </>
  );
}

export default MoodTracker;