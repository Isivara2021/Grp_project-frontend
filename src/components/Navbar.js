import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBell } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="nav-icons">
        <span className="notification-icon">
          <FaBell size={24} />
        </span>
        <Link to="/profile" className="user-icon">
          <FaUserCircle size={24} />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blood-availability">Blood Availability</Link></li>
        <li><Link to="/blood-bank">Blood Bank</Link></li>
        <li><Link to="/blood-donation-camp">Blood Donation Camp</Link></li>
        <li><Link to="/blood-education">Blood Education</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
