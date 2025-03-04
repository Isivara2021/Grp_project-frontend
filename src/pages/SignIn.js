import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css'; // Import the CSS for styling
import BackButton from '../components/BackButton'; 

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/home'); // Redirect to Home after signing in
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); // Navigate to the Create Account page
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
      <h2 className="signin-title">Sign In</h2>
      <form onSubmit={handleSignIn} className="signin-form">
        <div className="input-group">
          <input type="text" placeholder="Username" className="input-field" required />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" className="input-field" required />
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="signin-button">Sign In</button>
      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <button onClick={handleCreateAccount} className="create-account-button">Create Account</button>

      <div className="help-section">
        <span>Need help? </span>
        <a href="sample@gmail.com">sample@gmail.com</a>
      </div>

      <BackButton />
      </div>
    </div>
  );
};

export default SignIn;
