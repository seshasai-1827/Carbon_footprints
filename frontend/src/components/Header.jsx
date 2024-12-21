import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="logo">🌍 EcoTrack</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/track">Track Footprint</Link></li>
        <li><Link to="/calculators">Calculate</Link></li>
        <li><Link to="/credits">Earn Credits</Link></li>
        <li><Link to="/">Insights</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
