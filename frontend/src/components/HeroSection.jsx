// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Add this for custom styles

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Take Control of Your Carbon Footprint</h1>
      <p>Empower yourself with tools to reduce your impact and create a sustainable future.</p>
      <div className="cta-buttons">
        <Link to="/calculators">
          <button className="cta-button">Start Tracking</button>
        </Link>
        <Link to="/about">
          <button className="cta-button">Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
