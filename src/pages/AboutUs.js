import React from 'react';
import '../styles/AboutUs.css'; // Import the CSS for styling  
import BackButton from '../components/BackButton'; 
import generalEnquiriesImage from '../images/GeneralEnquiries.jpg';
import CallUsImage from '../images/CallUs.png';
import OfficeAddressImage from '../images/OfficeAddress.png';

const AboutUs = () => {
  return (
    <div className="container">
      <h2 className="title">About Us</h2>
      <div className="about-section">
        <p className="description">
          Red-LifeStream, the world’s largest professional society of clinicians and scientists dedicated to conquering blood diseases. Since 1958, we have advanced hematology through research, patient care, education, and advocacy. Join us in our commitment to excellence and make a significant impact on global health.
        </p>
      </div>

      <h2 className="title">Contact Us</h2>
      <div className="contact-section">
        <div className="contact-item">
        <img src={generalEnquiriesImage} alt="General Enquiries" className="img"/>
          <div>
            <p>General Enquiries</p>
            <a href="mailto:sample@gmail.com" className="contact-link">sample@gmail.com</a>
          </div>
        </div>
        <div className="contact-item">
        <img src={CallUsImage} alt="Call Us" className="img"/>
          <div>
            <p>Call Us</p>
            <a href="tel:+94123456789" className="contact-link">+94 123456789</a>
          </div>
        </div>
        <div className="contact-item">
        <img src={OfficeAddressImage} alt="Office Address" className="img"/>
          <div>
            <p>Office Address</p>
            <p>Sample address</p>
          </div>
        </div>
      </div>
      
      <div className="back-button-container">
        <BackButton />
      </div>
    </div>
  );
};

export default AboutUs;
