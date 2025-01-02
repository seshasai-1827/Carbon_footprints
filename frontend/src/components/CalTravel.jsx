import React, { useState } from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

// Styled-components for layout
const Calculator = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 7.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: -1px;
  margin-right: 40px;
  text-align: left;

  span.yellow {
    color: #c5a825;
  }
`;

const Label = styled.label`
  display: contents;
  margin: 0.5rem 0 0.2rem;
  font-weight: bold;
  font-size: 0.9rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px rgba(79, 172, 254, 0.4);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px rgba(79, 172, 254, 0.4);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Results = styled.div`
  margin-top: 3rem;
  text-align: left;

  h2 {
    font-size: 1.4rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    color: #666;
  }
`;

const ChartWrapper = styled.div`
  width: 200px; /* Adjust size of the doughnut chart */
  height: 200px;
  margin-top: 2rem;
  position: relative;
  margin: 2rem auto; /* Center the chart */
`;

const CarbonGauge = () => {
  const [flights, setFlights] = useState(0);
  const [car, setCar] = useState(0);
  const [ctype, setCtype] = useState('hatchback');
  const [engine, setEngine] = useState('gasoline');
  const [service, setService] = useState('yes');
  const [footprint, setFootprint] = useState(null);

  const calculateFootprint = (event) => {
    event.preventDefault();
    let footprint = 0;

    footprint += 1.3 * parseInt(flights, 10);

    if (ctype === 'hatchback') {
      if (engine === 'gasoline') footprint += 0.17 * car;
      else if (engine === 'diesel') footprint += 0.12 * car;
      else if (engine === 'electric') footprint += 0.09072 * car;
    } else if (ctype === 'sedan') {
      if (engine === 'gasoline') footprint += 0.2 * car;
      else if (engine === 'diesel') footprint += 0.16 * car;
      else if (engine === 'electric') footprint += 0.0469 * car;
    } else if (ctype === 'suv') {
      if (engine === 'gasoline') footprint += 0.25 * car;
      else if (engine === 'diesel') footprint += 0.21 * car;
      else if (engine === 'electric') footprint += 0.0714 * car;
    }

    if (service === 'no') footprint *= 1.15;

    setFootprint(footprint);
  };

  const getNeedleRotation = () => {
    if (footprint < 250) return -90;
    if (footprint < 500) return -45;
    if (footprint < 750) return 0;
    if (footprint < 1000) return 45;
    return 90;
  };

  const chartData = {
    labels: ['Dark Green', 'Light Green', 'Yellow', 'Orange', 'Red'],
    datasets: [
      {
        data: [250, 250, 250, 250, 250], // Equal zone sizes
        backgroundColor: ['#006400', '#4caf50', '#ffeb3b', '#ff9800', '#f44336'],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    rotation: 270, // Start from top
    circumference: 180, // Semi-circle
    cutout: '70%', // Adjust thickness
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip
    },
    plugins: {
      needlePlugin: {
        beforeDraw: function (chart) {
          const { ctx, chartArea } = chart;
          const { width, height } = chartArea;

          const centerX = width / 2;
          const centerY = height + 50;
          const needleRotation = getNeedleRotation();

          // Save current context
          ctx.save();

          // Set the center position of the needle and rotate based on the calculated value
          ctx.translate(centerX, centerY);
          ctx.rotate((Math.PI / 180) * needleRotation);

          // Draw the needle (triangle shape)
          ctx.beginPath();
          ctx.moveTo(0, -10); // Top of the needle
          ctx.lineTo(100, 0); // Right side of the needle
          ctx.lineTo(0, 10); // Bottom of the needle
          ctx.closePath();

          // Set needle color and fill
          ctx.fillStyle = '#000';
          ctx.fill();

          // Restore context after drawing
          ctx.restore();
        },
      },
    },
  };

  return (
    <Calculator>
      <Title>
        <span className="yellow">Travel</span> CO₂ <span className="yellow">Emission</span> Calculator
      </Title>

      <form onSubmit={calculateFootprint}>
        <Label htmlFor="flights">Number of Flights</Label>
        <Input
          type="number"
          id="flights"
          value={flights}
          onChange={(e) => setFlights(e.target.value)}
          required
        />

        <Label htmlFor="car">Kilometers Driven</Label>
        <Input
          type="number"
          id="car"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          required
        />

        <Label htmlFor="ctype">Car Type</Label>
        <Select
          id="ctype"
          value={ctype}
          onChange={(e) => setCtype(e.target.value)}
        >
          <option value="hatchback">Hatchback</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
        </Select>

        <Label htmlFor="engine">Engine Type</Label>
        <Select
          id="engine"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
        >
          <option value="gasoline">Gasoline</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
        </Select>

        <Label htmlFor="service">Serviced Recently</Label>
        <Select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>

        <Button type="submit">Calculate Emissions</Button>
      </form>

      {footprint !== null && (
        <Results>
          <h2>Calculation Results</h2>
          <p>Estimated CO₂ Emissions: {footprint.toFixed(2)} kg</p>
          <ChartWrapper>
            <Doughnut data={chartData} options={chartOptions} />
          </ChartWrapper>
        </Results>
      )}
    </Calculator>
  );
};

export default CarbonGauge;
