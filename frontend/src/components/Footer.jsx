import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Your footer styles

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>About</h4>
          <Link to="/about">Learn More</Link>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <Link to="/contact">Get in Touch</Link>
        </div>

        <div className="footer-section">
          <h4>Source Code</h4>
          <a href="https://github.com/seshasai-1827/Carbon_footprints" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 EcoTrack. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
