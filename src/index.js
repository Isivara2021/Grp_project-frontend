import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18+
import App from './App';
import './index.css'; // Optional styling

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
