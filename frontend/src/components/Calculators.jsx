import React from 'react';
import '../styles.css';

const Calculate = () => {
  return (
    <>
      <section id="calculate-intro" className="calculate-intro">
        <h2>Estimate Your Carbon Emissions</h2>
        <p>Use the following calculators to estimate the emissions of your activities:</p>
      </section>

      <section id="calculate-cards" className="calculate-section">
        <div className="calculator-cards">
          <div className="card">
            <h3>Travel</h3>
            <p>Calculate emissions based on your travel patterns.</p>
            <button>Start Now</button>
          </div>
          <div className="card">
            <h3>Energy</h3>
            <p>Calculate emissions from energy consumption.</p>
            <button>Start Now</button>
          </div>
          <div className="card">
            <h3>Diet</h3>
            <p>Estimate emissions from your dietary habits.</p>
            <button>Start Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculate;
