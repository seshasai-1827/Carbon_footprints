import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Calculate from './components/Calculators';
import EarnCredits from './components/EarnCredits';
import Insights from './components/Insights';
import ProgressTracker from './components/ProgressTracker';  
import Footer from './components/Footer';
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
        <Route path="/credits" element={<EarnCredits />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
