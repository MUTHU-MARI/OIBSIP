import React, { useState } from 'react';
import '../assets/Temperature.css';

const TempConverter = () => {

  const [unit, setUnit] = useState('celsius');
  const [temperature, setTemperature] = useState('');
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const convertTemperature = () => {
    let temp = parseFloat(temperature);
    if (isNaN(temp)) {
      alert('Please enter a valid temperature');
      return;
    }

    let c, f, k;

    switch (unit) {
      case 'celsius':
        c = temp;
        f = (c * 9) / 5 + 32;
        k = c + 273.15;
        break;
      case 'fahrenheit':
        f = temp;
        c = ((f - 32) * 5) / 9;
        k = (f - 32) * 5 / 9 + 273.15;
        break;
      case 'kelvin':
        k = temp;
        c = k - 273.15;
        f = (k - 273.15) * 9 / 5 + 32;
        break;
      default:
        break;
    }

    setCelsius(c.toFixed(2));
    setFahrenheit(f.toFixed(2));
    setKelvin(k.toFixed(2));
  };

  return (
    <div className='image'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxrTIhziXbnVrCz8KNWyFyAx3kwrw98-shw&usqp=CAU" alt="image" Style="width:100%;"/>
    <div className='container-wrapper'>
    <div className='container1'>
       <h3 style={{width:'280px'}}>Temperature Converter</h3>
      
       <label htmlFor="unit">Select Unit: </label>
      
       <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
         <option value="celsius">Celsius</option>
         <option value="fahrenheit">Fahrenheit</option>
         <option value="kelvin">Kelvin</option>
       </select>
       <br/>
      
       <label htmlFor="temperature">Enter Temperature: </label>
       <input
         type="number"
         id="temperature"
         value={temperature}
         onChange={(e) => setTemperature(e.target.value)}
        />
         <button onClick={convertTemperature}>Convert</button>
         <br/>
    </div>
      <div className='container2'>
     <h3  style={{marginLeft:'40px'}}> Result </h3>
      <label htmlFor="celsius">Celsius: </label>
      <input type="text" id="celsius" value={celsius} disabled />

      <label htmlFor="fahrenheit">Fahrenheit: </label>
      <input type="text" id="fahrenheit" value={fahrenheit} disabled />

      <label htmlFor="kelvin">Kelvin: </label>
      <input type="text" id="kelvin" value={kelvin} disabled />
      </div> 
    </div>
    </div>
  );
};

export default TempConverter;
