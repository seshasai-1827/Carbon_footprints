import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components definitions (converted exactly from your old CSS)
const Calculator = styled.div`
  background-color: #f9f9f9; /* Light background color */
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 7.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  margin-left: -1px; /* Adjust the margin to shift left */
  margin-right: 40px;
  text-align: left; /* Ensure alignment is to the left */

  span.yellow {
    color: #c5a825; /* Bright yellow color */
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
  margin-left: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;

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

// Component
const CalTravel = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [tripType, setTripType] = useState('one-way');
  const [accommodation, setAccommodation] = useState('hostel');
  const [nights, setNights] = useState(2);
  const [travellers, setTravellers] = useState(2);
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = (event) => {
    event.preventDefault();

    // Simple estimation logic for CO₂ emissions
    const distance = 8000; // Example distance in km (Patna to Hamburg)
    const emissionsPerKm = {
      plane: 0.15, // kg CO₂ per km per person
      car: 0.2,    // kg CO₂ per km per person
      train: 0.05   // kg CO₂ per km per person
    };

    // Assuming the user travels by plane for this example
    const mode = 'plane'; // You can modify this based on user input
    const totalEmissions = distance * emissionsPerKm[mode] * travellers;

    setEmissions(totalEmissions);
  };

  return (
    <Calculator>
      <Title>
        <span className="yellow">Travel</span> CO₂ <span className="yellow">Emission</span> Calculator
      </Title>

      <form onSubmit={calculateEmissions}>
        <Label htmlFor="from">From</Label>
        <Input
          type="text"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Patna, India"
          required
        />

        <Label htmlFor="to">To</Label>
        <Input
          type="text"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Bengaluru, India"
          required
        />

        <Label htmlFor="trip-type">Return or One-way</Label>
        <Select
          id="trip-type"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <option value="one-way">One-way</option>
          <option value="return">Return</option>
        </Select>

        <Label htmlFor="accommodation">Accommodation</Label>
        <Select
          id="accommodation"
          value={accommodation}
          onChange={(e) => setAccommodation(e.target.value)}
        >
          <option value="hostel">Hostel</option>
          <option value="hotel">Hotel</option>
          <option value="airbnb">Airbnb</option>
        </Select>

        <Label htmlFor="nights">Nights</Label>
        <Input
          type="number"
          id="nights"
          value={nights}
          onChange={(e) => setNights(e.target.value)}
          min="1"
          required
        />

        <Label htmlFor="travellers">Travellers</Label>
        <Input
          type="number"
          id="travellers"
          value={travellers}
          onChange={(e) => setTravellers(e.target.value)}
          min="1"
          required
        />

        <Button type="submit">Calculate Emissions</Button>
      </form>

      {emissions !== null && (
        <Results>
          <h2>Calculation Results</h2>
          <p>Estimated CO₂ Emissions: {emissions.toFixed(2)} kg</p>
        </Results>
      )}
    </Calculator>
  );
};

export default CalTravel;
