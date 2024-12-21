import React from 'react';
import '../styles.css';

const EarnCredits = () => {
  return (
    <>
      <section id="credits-intro" className="credits-intro">
        <h2>Earn Carbon Credits</h2>
        <p>Participate in activities that help offset carbon emissions:</p>
      </section>

      <section id="credits-cards" className="credits-section">
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
    </>
  );
};

export default EarnCredits;
