import React from 'react';
import '../styles/Home.css';
import BloodChartImage from '../images/BloodChart.png';
import BloodAvailabilityImage from '../images/BloodAvailability.jpg';
import BloodBankImage from '../images/BloodBank.jpg';
import BloodDonationCampImage from '../images/BloodDonationCamp.jpg';
import BloodEducationImage from '../images/BloodEducation.jpg';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Red-LifeStream!</h1>
        <div className="home-header-content">
          <p>
            A <span className="highlight">Red-LifeStream</span> collects, tests, processes, stores, and distributes blood. It ensures safe and compatible blood for transfusions and emergencies through strict donor screening, blood type matching, and infectious disease testing. Blood banks manage inventory to meet hospital demands, playing a crucial role in life-saving medical treatments.
          </p>
          <div className="chart">
            <img src={BloodChartImage} alt="Blood Chart" />
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
