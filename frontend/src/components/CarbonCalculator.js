import React, { useState } from 'react';

const CarbonCalculator = () => {
  const [data, setData] = useState({ travel: 0, diet: 0, energy: 0 });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: parseFloat(value) || 0 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(data.travel + data.diet + data.energy); // Simple logic
  };

  return (
    <div style={{ backgroundColor: '#edf2f7', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
      <h2 style={{ color: '#2c7a7b' }}>Carbon Footprint Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>Travel (miles): </label>
        <input type="number" name="travel" onChange={handleChange} style={{ margin: '5px' }} />
        <br />
        <label>Diet (meals/day): </label>
        <input type="number" name="diet" onChange={handleChange} style={{ margin: '5px' }} />
        <br />
        <label>Energy (kWh): </label>
        <input type="number" name="energy" onChange={handleChange} style={{ margin: '5px' }} />
        <br />
        <button type="submit" style={{ backgroundColor: '#38a169', color: '#fff', padding: '5px 10px', margin: '10px' }}>Calculate</button>
      </form>
      {result !== null && <h3>Total Emission: {result} kg CO₂</h3>}
    </div>
  );
};

export default CarbonCalculator;
