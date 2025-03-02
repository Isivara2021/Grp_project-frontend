import React from 'react';
import '../styles/Home.css';
import HomeImage from '../images/Home.jpeg';
import BloodAvailabilityImage from '../images/BloodAvailability.jpg';
import BloodBankImage from '../images/BloodBank.jpg';
import BloodDonationCampImage from '../images/BloodDonationCamp.jpg';
import BloodEducationImage from '../images/BloodEducation.jpg';

function Home() {
  return (
    <div className="home">
        <header className="home-header">
      <div className="image-container">
        <img src={HomeImage} alt="Home Image" className="home" />
        <div className="overlay-text">
          <h1 className="black-text">Welcome to </h1>
          <h1 className="red-text">Red-LifeStream!</h1>
        </div>
      </div>
    </header>

      <div className="main-content">
        <div className="grid-item" onClick={() => window.location.href='/blood-availability'}>
          <img src={BloodAvailabilityImage} alt="Blood Availability" />
          <div className="overlay">
            <h2>Blood Availability</h2>
          </div>
        </div>
        <div className="grid-item" onClick={() => window.location.href='/blood-bank'}>
          <img src={BloodBankImage} alt="Blood Bank" />
          <div className="overlay">
            <h2>Blood Bank</h2>
          </div>
        </div>
        <div className="grid-item" onClick={() => window.location.href='/blood-donation-camp'}>
          <img src={BloodDonationCampImage} alt="Blood Donation Camp" />
          <div className="overlay">
            <h2>Blood Donation Camp</h2>
          </div>
        </div>
        <div className="grid-item" onClick={() => window.location.href='/blood-education'}>
          <img src={BloodEducationImage} alt="Blood Education" />
          <div className="overlay">
            <h2>Blood Education</h2>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>FAQS</h2>
        <ul>
          <li><a href="/faq#cancel-order">Can I cancel my order?</a></li>
          <li><a href="/faq#return-blood">Can we return blood?</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
