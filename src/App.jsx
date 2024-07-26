import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Convert from './components/ConvertPage/Convert';

const App = () => {
  const [showConvert, setShowConvert] = useState(false);

  const handleConvertClick = () => {
    setShowConvert(true);
  };

  return (
    <>
      <Navbar />
      <Main onConvertClick={handleConvertClick} />
      <Features />
      {showConvert && <Convert />}
    </>
  );
}

export default App;
