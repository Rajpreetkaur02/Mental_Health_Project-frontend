import React, { useState } from 'react';
import './MoodTracker.css';

const MoodTracker = () => {
  const [mood, setMood] = useState('😐 Neutral');
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodChange = newMood => {
    setMood(newMood);
    setMoodHistory([...moodHistory, { mood: newMood, timestamp: new Date().toLocaleString()}]);
  };

  return (
    <div className="mood-tracker">
      <h3>How are you feeling?</h3>
      <div className="mood-buttons">
        <button onClick={() => handleMoodChange('😊 Happy')}>😊 Happy</button>
        <button onClick={() => handleMoodChange('😐 Neutral')}>😐 Neutral</button>
        <button onClick={() => handleMoodChange('😞 Sad')}>😞 Sad</button>
      </div>
      <div className="mood-history">
        <h3>Mood History</h3>
        {moodHistory.length === 0 ? (
          <ul className='listMoodHistory'>
            <li>No Record!</li>
          </ul>
        ) : (
          <ul className='listMoodHistory'>
            {moodHistory.map((entry, index) => (
              <li key={index}>
                <strong>{entry.mood}</strong><br/> at {entry.timestamp}
                <hr style={{marginTop: '10px'}}/>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
