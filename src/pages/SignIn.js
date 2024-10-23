import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css'; // Import the CSS for styling

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Logic for signing in can be added here
    alert('Signed In'); // You may replace this with actual sign-in logic
    navigate('/home'); // Redirect to Home after signing in
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); // Navigate to the Create Account page
  };

  const handleBack = () => {
    navigate('/'); // Navigate to the homepage or previous page
  };

  return (
    <div className="signin-container">
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

      <button onClick={handleBack} className="back-button">Back</button>
    </div>
  );
};

export default SignIn;
