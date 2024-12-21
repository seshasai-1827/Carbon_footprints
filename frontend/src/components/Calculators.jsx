import React from 'react';

const Calculators = () => (
  <section className="calculators">
    <h2>Easy-to-Use Tools</h2>
    <div className="cards">
      <div className="card">
        <h3>Travel Calculator</h3>
        <p>Estimate emissions based on your travel habits.</p>
        <button>Start Now</button>
      </div>
      <div className="card">
        <h3>Energy Calculator</h3>
        <p>Estimate emissions based on your energy consumption.</p>
        <button>Start Now</button>
      </div>
      <div className="card">
        <h3>Diet Calculator</h3>
        <p>Estimate emissions based on your diet.</p>
        <button>Start Now</button>
      </div>
    </div>
  </section>
);

export default Calculators;
