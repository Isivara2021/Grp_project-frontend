import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        © Designed and Developed by Faculty Of Computing
      </div>
      <div className="footer-links">
        <a href="/terms" className="footer-link">Terms & Conditions</a> |
        <a href="/privacy" className="footer-link">Privacy Policy</a> |
        <a href="/accessibility" className="footer-link">Accessibility Statement</a> |
        <span>Last Updated: Jul 21, 2024</span> |
        <a href="/sitemap" className="footer-link">Site Map</a>
      </div>
    </footer>
  );
};

export default Footer;
