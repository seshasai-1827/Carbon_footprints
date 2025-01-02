import React, { useEffect, useState } from 'react';
import '../styles.css'; // Assuming you have a global styles file

const Insights = () => {
  const [goal, setGoal] = useState({});
  const [weeklyTip, setWeeklyTip] = useState({});

  useEffect(() => {
    // Define an array of goals
    const goals = [
      {
        title: 'Goal: Use Public Transport',
        description: 'Reduce emissions by using public transport at least 3 times a week.',
      },
      {
        title: 'Goal: Opt for Cycling',
        description: 'Cycling to work can significantly reduce your CO₂ emissions.',
      },
      {
        title: 'Goal: Reduce Energy Consumption',
        description: 'Turn off lights and electronic devices when not in use to save energy.',
      },
      {
        title: 'Goal: Use Solar Power',
        description: 'Switching to solar power reduces your carbon footprint by using clean energy.',
      },
      {
        title: 'Goal: Eat Locally Sourced Food',
        description: 'Eating locally sourced food reduces emissions from transportation.',
      },
      {
        title: 'Goal: Plant Trees',
        description: 'Planting trees helps absorb CO₂ and counteracts emissions.',
      },
      {
        title: 'Goal: Buy Less Fast Fashion',
        description: 'Fast fashion creates significant carbon emissions. Opt for sustainable clothing.',
      },
      {
        title: 'Goal: Drive Less',
        description: 'Reducing car trips and walking or biking can lower your carbon emissions.',
      },
      {
        title: 'Goal: Use a Smart Thermostat',
        description: 'A smart thermostat helps optimize energy use and reduce unnecessary heating or cooling.',
      },
      {
        title: 'Goal: Reduce Air Travel',
        description: 'Fly less to significantly reduce your carbon emissions from aviation.',
      },
    ];

    // Define an array of weekly tips
    const weeklyTips = [
      {
        title: 'Weekly Tip: Reduce Meat Consumption',
        description: 'Try reducing meat consumption to lower your food-related emissions.',
      },
      {
        title: 'Weekly Tip: Wash Clothes in Cold Water',
        description: 'Washing clothes in cold water saves energy and reduces CO₂ emissions.',
      },
      {
        title: 'Weekly Tip: Install Energy-Efficient Appliances',
        description: 'Install energy-efficient appliances to reduce long-term energy consumption.',
      },
      {
        title: 'Weekly Tip: Avoid Plastic Packaging',
        description: 'Avoid plastic packaging to reduce waste and your overall carbon footprint.',
      },
      {
        title: 'Weekly Tip: Compost Organic Materials',
        description: 'Composting organic materials reduces landfill waste and CO₂ emissions.',
      },
      {
        title: 'Weekly Tip: Choose Eco-Friendly Packaging',
        description: 'Choose eco-friendly packaging to reduce plastic waste and environmental harm.',
      },
      {
        title: 'Weekly Tip: Opt for Reusable Bags',
        description: 'Opt for reusable bags instead of plastic to cut down on waste.',
      },
      {
        title: 'Weekly Tip: Limit Disposable Plastic Use',
        description: 'Limit your use of disposable plastic and switch to reusable alternatives.',
      },
      {
        title: 'Weekly Tip: Switch to Energy-Efficient Light Bulbs',
        description: 'Switch to energy-efficient light bulbs to lower energy consumption and emissions.',
      },
      {
        title: 'Weekly Tip: Reduce Food Waste',
        description: 'Reducing food waste helps reduce emissions related to food production and disposal.',
      },
    ];

    // Randomly select 1 goal and 1 weekly tip
    const randomGoal = goals[Math.floor(Math.random() * goals.length)];
    const randomWeeklyTip = weeklyTips[Math.floor(Math.random() * weeklyTips.length)];

    setGoal(randomGoal);
    setWeeklyTip(randomWeeklyTip);
  }, []); // Run only once when the component is mounted

  return (
    <section id="insights" className="insights-intro">
      <h2>Insights</h2>
      <p>Get personalized tips to reduce your carbon footprint.</p>
      <div className="insight-cards">
        <div className="card">
          <h3>{goal.title}</h3>
          <p>{goal.description}</p>
        </div>
        <div className="card">
          <h3>{weeklyTip.title}</h3>
          <p>{weeklyTip.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Insights;
