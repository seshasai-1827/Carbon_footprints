import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressTracker = () => {
  const [progress] = useState(40);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Carbon Footprint Reduction',
        data: [10, 20, 30, 40, 50, 60, 70],
        fill: false,
        borderColor: 'green',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Cleanup the chart on unmount
  useEffect(() => {
    return () => {
      if (window.myChart) {
        window.myChart.destroy();
      }
    };
  }, []);

  return (
    <div className="progress-tracker">
      <h2>Your Carbon Footprint Progress</h2>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          <span>{progress}%</span>
        </div>
      </div>

      <div className="chart-container">
        <h3>Footprint Reduction Over Time</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProgressTracker;
