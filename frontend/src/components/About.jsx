import React from 'react';
import './Footer.css'; // Add your custom styles

const About = () => {
  return (
    <div className="about-page">
      <section className="why-it-matters">
        <h2>Why It Matters</h2>
        <div className="cards">
          <div className="card">🌍 Climate Change</div>
          <div className="card">🌿 Environmental Degradation</div>
          <div className="card">💨 Pollution</div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How Our Website Works</h2>
        <div className="steps">
          <div className="step">
            <div className="icon">📋</div>
            <p>Track Your Activities</p>
          </div>
          <div className="step">
            <div className="icon">🧮</div>
            <p>Estimate Your Emissions</p>
          </div>
          <div className="step">
            <div className="icon">💡</div>
            <p>Personalized Insights</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
