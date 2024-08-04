import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Convert from './components/ConvertPage/Convert';
import Login from './components/Login/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [showConvert, setShowConvert] = useState(false);

  const handleConvertClick = () => {
    setShowConvert(true);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main onConvertClick={handleConvertClick} />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showConvert && <Convert />}
    </Router>
  );
}

export default App;
