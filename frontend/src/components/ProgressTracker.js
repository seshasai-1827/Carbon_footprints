import React from 'react';
import { Bar } from 'react-chartjs-2';

const ProgressTracker = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Carbon Emission (kg CO₂)',
        data: [50, 40, 30, 20],
        backgroundColor: '#38a169',
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ backgroundColor: '#edf2f7', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#2c7a7b' }}>Progress Tracker</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressTracker;
