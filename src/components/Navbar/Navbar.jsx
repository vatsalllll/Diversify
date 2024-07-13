import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name">
        <h1>Diversify</h1>
      </div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button className="sign-in">Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
