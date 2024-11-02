import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Navbar from './components/Navbar'; // Importing Navbar
import Footer from './components/Footer'; // Importing Footer
import Home from './pages/Home'; // Importing page components
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn'; // Importing SignIn page
import CreateAccount from './pages/CreateAccount'; // Importing Create Account page
import BloodAvailability from './pages/BloodAvailability';
import BloodBank from './pages/BloodBank';
import BloodDonationCamp from './pages/BloodDonationCamp';
import BloodEducation from './pages/BloodEducation';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" />} /> {/* Redirect to SignIn page */}
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blood-availability" element={<BloodAvailability />} />
          <Route path="/blood-bank" element={<BloodBank />} />
          <Route path="/blood-donation-camp" element={<BloodDonationCamp />} />
          <Route path="/blood-education" element={<BloodEducation />} />
          <Route path="/sign-in" element={<SignIn />} /> {/* SignIn Route */}
          <Route path="/create-account" element={<CreateAccount />} /> {/* Create Account Route */}
          <Route path="/contact-us" element={<Navigate to="/about-us" />} /> {/* Redirect Contact Us to About Us */}
        </Routes>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
