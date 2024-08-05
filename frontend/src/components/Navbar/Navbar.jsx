import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name">
        <h1>Diversify</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login"><button className="sign-in">Sign In</button></Link>
        <Link to="/register"><button className="register">Register</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
