import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgressTracker from './components/ProgressTracker';
import Calculate from './components/Calculators';
import CalTravel from './components/CalTravel'; // Import the CalTravel component
import CalEnergy from './components/CalEnergy'; // Import the EnergyCalculator component
import EarnCredits from './components/EarnCredits';
import Insights from './components/Insights';
import Footer from './components/Footer';
import About from './components/About';  // Import About page
import Contact from './components/Contact'; // Import Contact page
import './styles.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/track" element={<ProgressTracker />} />
        <Route path="/calculators" element={<Calculate />} />
        <Route path="/calculators/travel" element={<CalTravel />} /> {/* Route for Travel Calculator */}
        <Route path="/calculators/energy" element={<CalEnergy />} /> {/* Route for Energy Calculator */}
        <Route path="/credits" element={<EarnCredits />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
