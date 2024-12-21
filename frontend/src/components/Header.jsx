// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Assuming styles.css includes the updated CSS

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/track">Track Footprint</Link></li>
          <li><Link to="/calculators">Calculators</Link></li>
          <li><Link to="/credits">Earn Credits</Link></li>
          <li><Link to="/insights">Insights</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
