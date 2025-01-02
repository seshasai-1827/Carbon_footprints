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
  const [progress] = useState(20);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Carbon Footprint Reduction',
        data: [10, 30, 20, 40, 10, 20, 30],
        fill: false,
        borderColor: '#28a745', // Green color
        tension: 0.1,
        borderWidth: 3, // Thicker border for visibility
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

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

      {/* Progress Bar */}
      <div className="progress-bar" style={{ marginBottom: '20px' }}>
        <div className="progress" style={{ width: `${progress}%` }}>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-container" style={{ textAlign: 'center' }}>
        <h3>Footprint Reduction Over Time</h3>
        <Line data={data} options={options} />
      </div>

      {/* Credits or Actions */}
      <div className="actions" style={{ marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#28a745', color: 'white' }}>
          Track More
        </button>
      </div>
    </div>
  );
};

export default ProgressTracker;
