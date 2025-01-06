import React, { useState } from 'react';
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
  const [monthlyData, setMonthlyData] = useState([120, 200, 150, 300, 180, 250, 400, 350, 220, 280, 170, 130]);


  const [selectedMonth, setSelectedMonth] = useState(0); // Default to first month

  const totalMonthlySum = monthlyData.reduce((sum, value) => sum + value, 0); // Calculate total sum
  const progress = (totalMonthlySum / 15).toFixed(2); // Calculate progress dynamically

  const handleSliderChange = (value) => {
    const updatedData = [...monthlyData];
    updatedData[selectedMonth] = value; // Update the selected month's data
    setMonthlyData(updatedData);
  };

  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Carbon Footprint Reduction',
        data: monthlyData,
        fill: false,
        borderColor: '#28a745',
        tension: 0.1,
        borderWidth: 3,
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

  return (
    <div className="progress-tracker" style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2>Your Carbon Footprint Progress</h2>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ marginBottom: '20px', background: '#f0f0f0', height: '30px', borderRadius: '5px', overflow: 'hidden' }}>
        <div
          className="progress"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background:
              progress > 90
                ? 'red'
                : progress > 70
                ? 'orange'
                : 'green',
            color: 'white',
            textAlign: 'center',
            lineHeight: '30px',
            height: '100%',
          }}
        >
          <span>{progress}%</span>
        </div>
      </div>

      {/* Dropdown for Month Selection */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <label htmlFor="month-select" style={{ marginRight: '10px' }}>Select Month:</label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          style={{
            padding: '8px 12px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '14px',
          }}
        >
          {data.labels.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
      </div>

      {/* Single Slider */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="range"
          min="0"
          max="500"
          value={monthlyData[selectedMonth]}
          onChange={(e) => handleSliderChange(Number(e.target.value))}
          style={{
            width: '80%',
            appearance: 'none',
            height: '8px',
            borderRadius: '5px',
            background: '#ddd',
            outline: 'none',
            margin: '0 auto',
          }}
        />
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          Value: {monthlyData[selectedMonth]}
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-container" style={{ textAlign: 'center' }}>
        <h3>Footprint Reduction Over Time</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProgressTracker;
