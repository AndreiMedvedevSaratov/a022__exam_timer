import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [startTime] = useState(new Date().toLocaleTimeString());
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const timeToSec = time => time.split(':').reduce((acc, v) => acc * 60 + parseInt(v), 0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);

    return () => {
      clearInterval(timer);
    }
  }, [setCurrentTime]);

  return (
    <div className="App">
      <h1>Добрый день!</h1>
      <h2>Компонент был смонтирован {startTime}</h2>
      <h2>Сейчас {currentTime}</h2>
      <h2>Компонент был смонтирован {timeToSec(currentTime) - timeToSec(startTime)} секунды назад</h2>
    </div>
  );
}

export default App;
