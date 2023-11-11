import React, { useState } from 'react';
import '../styles/MoodTracker.css';

const MoodTracker = () => {
  const [mood, setMood] = useState('Neutral');
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodChange = newMood => {
    setMood(newMood);
    setMoodHistory([...moodHistory, { mood: newMood, timestamp: new Date().toLocaleString() }]);
  };

  return (
    <div className="mood-tracker">
      <h1>How are you feeling?</h1>
      <div className="mood-buttons">
        <button onClick={() => handleMoodChange('Happy')}>😊 Happy</button>
        <button onClick={() => handleMoodChange('Neutral')}>😐 Neutral</button>
        <button onClick={() => handleMoodChange('Sad')}>😞 Sad</button>
      </div>
      <div className="mood-history">
        <h2>Mood History</h2>
        <ul>
          {moodHistory.map((entry, index) => (
            <li key={index}>
              <strong>{entry.mood}</strong> at {entry.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTracker;
