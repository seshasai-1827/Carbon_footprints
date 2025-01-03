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

const DietCalculator = () => {
  const [meatFrequency, setMeatFrequency] = useState(0); // times per week
  const [riceFrequency, setRiceFrequency] = useState(0); // times per week
  const [lentilsFrequency, setLentilsFrequency] = useState(0); // times per week
  const [dairyFrequency, setDairyFrequency] = useState(0); // times per week
  const [processedFoodFrequency, setProcessedFoodFrequency] = useState(0); // times per week
  const [vegetableFrequency, setVegetableFrequency] = useState(0); // times per week
  const [fruitFrequency, setFruitFrequency] = useState(0); // times per week
  const [plantBasedFrequency, setPlantBasedFrequency] = useState(0); // times per week
  const [bottledWaterFrequency, setBottledWaterFrequency] = useState(0); // times per week
  const [footprint, setFootprint] = useState(null);

  const calculateFootprint = (event) => {
    event.preventDefault();

    let totalFootprint = 0;

    // CO2 emissions for different food items
    const carbonBeef = 27; // kg CO2 per kg of beef
    const carbonPork = 12; // kg CO2 per kg of pork
    const carbonChicken = 6.9; // kg CO2 per kg of chicken
    const carbonRice = 4.5; // kg CO2 per kg of rice
    const carbonLentils = 0.9; // kg CO2 per kg of lentils
    const carbonDairy = 8; // kg CO2 per liter of dairy
    const carbonProcessedFood = 4; // kg CO2 per 100g of processed food
    const carbonVegetables = 0.5; // kg CO2 per kg of vegetables
    const carbonFruits = 0.6; // kg CO2 per kg of fruits
    const carbonPlantBased = 1.5; // kg CO2 per kg of plant-based food
    const carbonBottledWater = 0.2; // kg CO2 per bottle of water

    // Calculate weekly carbon footprints
    totalFootprint += meatFrequency * carbonBeef; // Assuming beef consumption for meat frequency
    totalFootprint += riceFrequency * carbonRice; // Carbon for rice consumption
    totalFootprint += lentilsFrequency * carbonLentils; // Carbon for lentils consumption
    totalFootprint += dairyFrequency * carbonDairy; // Carbon for dairy consumption
    totalFootprint += processedFoodFrequency * carbonProcessedFood; // Carbon for processed food
    totalFootprint += vegetableFrequency * carbonVegetables; // Carbon for vegetables
    totalFootprint += fruitFrequency * carbonFruits; // Carbon for fruits
    totalFootprint += plantBasedFrequency * carbonPlantBased; // Carbon for plant-based alternatives
    totalFootprint += bottledWaterFrequency * carbonBottledWater; // Carbon for bottled water consumption

    setFootprint(totalFootprint);
  };

  return (
    <Calculator>
      <Title>
        <span className="yellow">Diet</span> CO₂ <span className="yellow">Emission</span> Calculator
      </Title>

      <form onSubmit={calculateFootprint}>
        <Label htmlFor="meatFrequency">How often do you eat meat per week?</Label>
        <Input
          type="number"
          id="meatFrequency"
          value={meatFrequency}
          onChange={(e) => setMeatFrequency(e.target.value)}
          required
        />

        <Label htmlFor="riceFrequency">How often do you eat rice per week?</Label>
        <Input
          type="number"
          id="riceFrequency"
          value={riceFrequency}
          onChange={(e) => setRiceFrequency(e.target.value)}
          required
        />

        <Label htmlFor="lentilsFrequency">How often do you eat lentils per week?</Label>
        <Input
          type="number"
          id="lentilsFrequency"
          value={lentilsFrequency}
          onChange={(e) => setLentilsFrequency(e.target.value)}
          required
        />

        <Label htmlFor="dairyFrequency">How often do you eat dairy per week?</Label>
        <Input
          type="number"
          id="dairyFrequency"
          value={dairyFrequency}
          onChange={(e) => setDairyFrequency(e.target.value)}
          required
        />

        <Label htmlFor="processedFoodFrequency">How often do you eat processed foods per week?</Label>
        <Input
          type="number"
          id="processedFoodFrequency"
          value={processedFoodFrequency}
          onChange={(e) => setProcessedFoodFrequency(e.target.value)}
          required
        />

        <Label htmlFor="vegetableFrequency">How often do you eat vegetables per week?</Label>
        <Input
          type="number"
          id="vegetableFrequency"
          value={vegetableFrequency}
          onChange={(e) => setVegetableFrequency(e.target.value)}
          required
        />

        <Label htmlFor="fruitFrequency">How often do you eat fruits per week?</Label>
        <Input
          type="number"
          id="fruitFrequency"
          value={fruitFrequency}
          onChange={(e) => setFruitFrequency(e.target.value)}
          required
        />

        <Label htmlFor="plantBasedFrequency">How often do you consume plant-based alternatives per week?</Label>
        <Input
          type="number"
          id="plantBasedFrequency"
          value={plantBasedFrequency}
          onChange={(e) => setPlantBasedFrequency(e.target.value)}
          required
        />

        <Label htmlFor="bottledWaterFrequency">How often do you drink bottled water per week?</Label>
        <Input
          type="number"
          id="bottledWaterFrequency"
          value={bottledWaterFrequency}
          onChange={(e) => setBottledWaterFrequency(e.target.value)}
          required
        />

        <Button type="submit">Calculate Emissions</Button>
      </form>

      {footprint !== null && (
        <Results>
          <h2>Calculation Results</h2>
          <p>Estimated CO₂ Emissions from Your Diet: {footprint.toFixed(2)} kg per week</p>
        </Results>
      )}
    </Calculator>
  );
};

export default DietCalculator;
