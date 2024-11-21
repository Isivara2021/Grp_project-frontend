// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Navbar.css'; // CSS styling
import logo from '../images/logo.png'; // Logo image

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="nav-icons">
        <span className="notification-icon">🔔</span>
        <Link to="/profile" className="user-icon">👤</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blood-availability">Blood Availability</Link></li>
        <li><Link to="/blood-bank">Blood Bank</Link></li>
        <li><Link to="/blood-donation-camp">Blood Donation Camp</Link></li>
        <li><Link to="/blood-education">Blood Education</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/about-us">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
