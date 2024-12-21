// src/components/EarnCredits.js
import React from 'react';

const EarnCredits = () => {
  return (
    <section id="credits">
      <h2>Earn Carbon Credits</h2>
      <div className="credits-cards">
        <div className="card">
          <h3>Plant a Tree 🌲</h3>
          <p>Support reforestation to offset emissions.</p>
        </div>
        <div className="card">
          <h3>Bike or Walk 🚶</h3>
          <p>Cut down on emissions from vehicles.</p>
        </div>
        <div className="card">
          <h3>Use Energy Efficient Appliances ⚙️</h3>
          <p>Reduce energy usage at home and work.</p>
        </div>
      </div>
    </section>
  );
};

export default EarnCredits;
