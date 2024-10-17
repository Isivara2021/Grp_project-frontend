import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './navbar.css'; // Create this file for styling
import logo from '../images/logo.png'; // Import the image


const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="nav-icons">
          <span className="notification-icon">🔔</span>
          <span className="user-icon">👤</span>
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

      {/* Define Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blood-availability" element={<BloodAvailability />} />
        <Route path="/blood-bank" element={<BloodBank />} />
        <Route path="/blood-donation-camp" element={<BloodDonationCamp />} />
        <Route path="/blood-education" element={<BloodEducation />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

// Placeholder components for each route
const Home = () => <h2>Home Page</h2>;
const BloodAvailability = () => <h2>Blood Availability Page</h2>;
const BloodBank = () => <h2>Blood Bank Page</h2>;
const BloodDonationCamp = () => <h2>Blood Donation Camp Page</h2>;
const BloodEducation = () => <h2>Blood Education Page</h2>;
const AboutUs = () => <h2>About Us Page</h2>;
const ContactUs = () => <h2>Contact Us Page</h2>;

export default Navbar;
