import React, { useState } from 'react';
import styled from 'styled-components';

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

const EnergyCalculator = () => {
  const [electricity, setElectricity] = useState(0); // kWh per month
  const [heating, setHeating] = useState(0); // Gas or Electric heating consumption
  const [energySource, setEnergySource] = useState('yes'); // Default to 'yes' for renewable
  const [footprint, setFootprint] = useState(null);

  const calculateFootprint = (event) => {
    event.preventDefault();

    let rfootprint = 0;
    let nrfootprint = 0;

    // Convert inputs to numbers to ensure calculations work properly
    const electricityValue = parseFloat(electricity);
    const heatingValue = parseFloat(heating);

    // CO2 emissions for electricity usage based on energy source
    if (electricityValue > 0) {
      rfootprint += 0.02 * electricityValue; // Renewable has very low CO2 emissions per kWh
      nrfootprint += 0.4 * electricityValue; // 0.4 kg CO2/kWh for natural gas
    }

    // CO2 emissions for heating
    if (heatingValue > 0) {
      rfootprint += 0.05 * heatingValue; // Renewable heating (like heat pumps)
      nrfootprint += 0.2 * heatingValue; // Natural gas heating
    }

    // Set the correct footprint based on the energy source
    if (energySource === 'yes') {
      setFootprint(rfootprint);
    } else if (energySource === 'no') {
      setFootprint(nrfootprint);
    }
  };

  return (
    <Calculator>
      <Title>
        <span className="yellow">Energy</span> CO₂ <span className="yellow">Emission</span> Calculator
      </Title>

      <form onSubmit={calculateFootprint}>
        <Label htmlFor="electricity">Monthly Electricity Consumption (kWh)</Label>
        <Input
          type="number"
          id="electricity"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
          required
        />

        <Label htmlFor="heating">Monthly Heating Consumption (kWh)</Label>
        <Input
          type="number"
          id="heating"
          value={heating}
          onChange={(e) => setHeating(e.target.value)}
          required
        />

        <Label htmlFor="energySource">Do you use renewable energy sources?</Label>
        <Select
          id="energySource"
          value={energySource}
          onChange={(e) => setEnergySource(e.target.value)}
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
        </Results>
      )}
    </Calculator>
  );
};

export default EnergyCalculator;
