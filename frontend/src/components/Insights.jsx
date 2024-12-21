// src/components/Insights.js
import React from 'react';
import '../styles.css'; // Assuming you have a global styles file

const Insights = () => {
  return (
    <section id="insights" className="insights-intro">
      <h2>Insights</h2>
      <p>Get personalized tips to reduce your carbon footprint.</p>
      <div className="insight-cards">
        <div className="card">
          <h3>Goal: Use Public Transport</h3>
          <p>Reduce emissions by using public transport at least 3 times a week.</p>
        </div>
        <div className="card">
          <h3>Weekly Tip</h3>
          <p>Try reducing meat consumption to lower your food-related emissions.</p>
        </div>
      </div>
    </section>
  );
};

export default Insights;
