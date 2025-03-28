import React from "react";
import '../styles/AboutUs.css';
import CEOImage from '../images/CEO.jpg';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>
            Red-LifeStream
          </h2>
          <p>
            Red-LifeStream, the world's largest professional society of clinicians and scientists
            dedicated to conquering blood diseases. Since 1958, we have advanced hematology
            through research, patient care, education, and advocacy. Join us in our commitment to
            excellence and make a significant impact on global health.
          </p>
        </div>
        <div className="founder-info">
          <p className="ceo-title">CEO & Founder</p>
          <p className="founder-name">Dr. Nielsen Perera</p>
          <img src={CEOImage} alt="Founder" className="founder-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
