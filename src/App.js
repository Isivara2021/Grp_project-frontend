import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importing Navbar
import Footer from './components/Footer'; // Importing Footer
import Home from './pages/Home'; // Importing page components
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import BloodAvailability from './pages/BloodAvailability';
import BloodBank from './pages/BloodBank';
import BloodDonationCamp from './pages/BloodDonationCamp';
import BloodEducation from './pages/BloodEducation';
import Profile from './pages/Profile';
import DonationHistory from './pages/DonationHistory'; // Importing Donation History page

const App = () => {
  const location = useLocation(); // Get the current location

  // Paths where Navbar and Footer should be hidden
  const hideNavbarAndFooterRoutes = ['/sign-in', '/create-account'];
  const showNavbarAndFooter = !hideNavbarAndFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      {/* Conditionally render Navbar */}
      {showNavbarAndFooter && <Navbar />}

      {/* Route configuration */}
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} /> {/* Redirect to SignIn page */}
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blood-availability" element={<BloodAvailability />} />
        <Route path="/blood-bank" element={<BloodBank />} />
        <Route path="/blood-donation-camp" element={<BloodDonationCamp />} />
        <Route path="/blood-education" element={<BloodEducation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/donation-history" element={<DonationHistory />} />
      </Routes>

      {/* Conditionally render Footer */}
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
