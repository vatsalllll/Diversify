import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Convert from './components/ConvertPage/Convert';

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Features/>
      <Convert/>
    </>
  );
}

export default App;
