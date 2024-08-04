import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Our App</h2>
      <div className="about-content">
        <p>Welcome to our innovative content transformation platform! We specialize in seamlessly converting posts between various social media formats.</p>
        <ul>
          <li>Transform Twitter posts to Instagram or Facebook format</li>
          <li>Convert social media content to GitHub-friendly markdown</li>
          <li>Adapt your content for optimal engagement across platforms</li>
        </ul>
        <p>Our mission is to simplify cross-platform content sharing, helping you maintain a consistent and engaging online presence effortlessly.</p>
      </div>
    </div>
  );
};

export default About;