// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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
