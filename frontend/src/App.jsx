import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyItMatters from './components/WhyItMatters';
import HowItWorks from './components/HowItWorks';
import Calculators from './components/Calculators';
import EarnCredits from './components/EarnCredits';
import ProgressTracker from './components/ProgressTracker';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/track" element={<ProgressTracker />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/credits" element={<EarnCredits />} />
      </Routes>
      <WhyItMatters />
      <HowItWorks />
      <Footer />
    </Router>
  );
}

export default App;
