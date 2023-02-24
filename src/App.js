import React, { useState } from 'react';
import './App.css';

function App(){
  const [temperature, setTemperature] = useState('');
  const [color, setColor] = useState('lightgreen');
  const [fahrenheit, setFahrenheit] = useState("");
  const [emotion, setEmotion] = useState("Normal");

  const TemperatureChange = (event) => {
    const temperature = Number(event.target.value);
    setTemperature(temperature);
    setFahrenheit((temperature * 9) / 5 + 32);
    if (temperature < 18) {
      Cold();
    } else if (temperature >= 18 && temperature <= 30) {
      Normal();
    } else if (temperature > 30) {
      Hot();
    } 
  };
  function Cold(){
    
    setColor('lightblue');
    setEmotion('Cold');
    return;
  }
  function Normal(){
    
    setColor('lightgreen');
    setEmotion('Normal');
    return;
  }
  function Hot(){
    
    setColor('#FFCCCB');
    setEmotion('Hot');
    return;
  }

  return (
  <div class="card" style={{ backgroundColor: color, width: '200px', height: '200px', padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
    <div style={{margin : '0 auto'}}>
      <input type="number" value={temperature} onChange={TemperatureChange} style={{ width: '80%', padding: '10px', fontSize: '20px', borderRadius: '5px' }} />
    </div>
    <h3 style={{ margin: 20 }}>
        {temperature}°C = {fahrenheit}°F
    </h3>
    <h3>
        {emotion}
    </h3>  
  </div>
  );
};

export default App;