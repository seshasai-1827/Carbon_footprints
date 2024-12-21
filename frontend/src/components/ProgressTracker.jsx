import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

const ProgressTracker = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Footprint Reduction',
      data: [12, 19, 3, 5, 2],
    }],
  };

  return (
    <section className="progress-tracker">
      <h2>Visualize Your Progress</h2>
      <Line data={data} />
    </section>
  );
};

export default ProgressTracker;
