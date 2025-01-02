import React, { useEffect, useState } from 'react';
import '../styles.css'; // Assuming you have a global styles file

const Insights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    // Define an array of different insights
    const availableInsights = [
      {
        title: 'Goal: Use Public Transport',
        description: 'Reduce emissions by using public transport at least 3 times a week.',
      },
      {
        title: 'Weekly Tip',
        description: 'Try reducing meat consumption to lower your food-related emissions.',
      },
      {
        title: 'Goal: Opt for Cycling',
        description: 'Cycling to work can significantly reduce your CO₂ emissions.',
      },
      {
        title: 'Weekly Tip',
        description: 'Consider switching to a vegetarian or vegan diet to decrease your carbon footprint.',
      },
      {
        title: 'Goal: Reduce Energy Consumption',
        description: 'Turn off lights and electronic devices when not in use to save energy.',
      },
      {
        title: 'Weekly Tip',
        description: 'Install energy-efficient appliances to reduce long-term energy consumption.',
      },
      {
        title: 'Goal: Use Solar Power',
        description: 'Switching to solar power reduces your carbon footprint by using clean energy.',
      },
      {
        title: 'Weekly Tip',
        description: 'Wash clothes in cold water to save energy and reduce CO₂ emissions.',
      },
      {
        title: 'Goal: Eat Locally Sourced Food',
        description: 'Eating locally sourced food reduces emissions from transportation.',
      },
      {
        title: 'Weekly Tip',
        description: 'Avoid plastic packaging to reduce waste and your overall carbon footprint.',
      },
      {
        title: 'Goal: Plant Trees',
        description: 'Planting trees helps absorb CO₂ and counteracts emissions.',
      },
      {
        title: 'Weekly Tip',
        description: 'Reduce waste by composting organic materials instead of throwing them away.',
      },
      {
        title: 'Goal: Buy Less Fast Fashion',
        description: 'Fast fashion creates significant carbon emissions. Opt for sustainable clothing.',
      },
      {
        title: 'Weekly Tip',
        description: 'Choose eco-friendly packaging to reduce plastic waste and environmental harm.',
      },
      {
        title: 'Goal: Drive Less',
        description: 'Reducing car trips and walking or biking can lower your carbon emissions.',
      },
      {
        title: 'Weekly Tip',
        description: 'Opt for reusable bags instead of plastic to cut down on waste.',
      },
      {
        title: 'Goal: Use a Smart Thermostat',
        description: 'A smart thermostat helps optimize energy use and reduce unnecessary heating or cooling.',
      },
      {
        title: 'Weekly Tip',
        description: 'Limit your use of disposable plastic and switch to reusable alternatives.',
      },
      {
        title: 'Goal: Reduce Air Travel',
        description: 'Fly less to significantly reduce your carbon emissions from aviation.',
      },
      {
        title: 'Weekly Tip',
        description: 'Switch to energy-efficient light bulbs to lower energy consumption and emissions.',
      },
    ];

    // Randomly select two different insights from the list
    const randomInsights = [];
    while (randomInsights.length < 2) {
      const randomIndex = Math.floor(Math.random() * availableInsights.length);
      if (!randomInsights.includes(availableInsights[randomIndex])) {
        randomInsights.push(availableInsights[randomIndex]);
      }
    }

    setInsights(randomInsights);
  }, []); // Run only once when the component is mounted

  return (
    <section id="insights" className="insights-intro">
      <h2>Insights</h2>
      <p>Get personalized tips to reduce your carbon footprint.</p>
      <div className="insight-cards">
        {insights.map((insight, index) => (
          <div key={index} className="card">
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
