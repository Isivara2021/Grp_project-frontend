// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // Import the CSS file

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates one step back in the browser's history
  };

  return (
    <button onClick={goBack} className="back-button">
      Back
    </button>
  );
};

export default BackButton;
