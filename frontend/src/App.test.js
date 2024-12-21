import React from 'react';
import CarbonCalculator from './components/CarbonCalculator';
import ProgressTracker from './components/ProgressTracker';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f0fdf4' }}>
      <h1 style={{ color: '#2c7a7b', textAlign: 'center' }}>Take Control of Your Carbon Footprint</h1>
      <CarbonCalculator />
      <ProgressTracker />
    </div>
  );
};

export default App;
