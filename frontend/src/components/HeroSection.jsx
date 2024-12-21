import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="hero">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero-content"
    >
      <h1>Take Control of Your Carbon Footprint</h1>
      <p>Empower yourself with tools to reduce your impact and create a sustainable future.</p>
      <button>Start Tracking</button>
      <button>Learn More</button>
    </motion.div>
  </section>
);

export default HeroSection;
