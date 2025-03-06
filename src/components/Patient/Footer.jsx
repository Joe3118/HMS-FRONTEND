import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 HEALTHCARE HEAVEN/HOSPITAL SERVICES. All Rights Reserved.</p>
        <p>
          Contact Us: <strong>999 888 222</strong> | 
          <a href="mailto:healthcare_heaven@gmail.com"> healthcare_heaven@gmail.com</a> | 
          <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer"> Website</a>
        </p>
        <p>Address: HEALTHCARE HEAVEN, Ghandhipuram, Coimbatore-641032</p>
        
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
        </div>

        <div className="footer-links">
          <a href="/">Privacy Policy</a> | 
          <a href="/contact-us"> Contact Us</a> | 
          <a href="/"> Disclaimer</a>
        </div>

        <p className="tagline">Designed to Deliver Excellence in Healthcare Management.</p>
      </div>
    </footer>
  );
};

export default Footer;
