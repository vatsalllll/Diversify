import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-intro">This is the Contact page.</p>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>Email: example@example.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>Phone: +123-456-7890</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <span>GitHub: <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Address: Scaler, School of Technology, Bangalore</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;