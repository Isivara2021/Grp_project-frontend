import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/CreateAccountForm.css';
import BackButton from '../components/BackButton';

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    verifyPassword: '',
    role: '',
    firstName: '',
    lastName: '',
    addressType: '',
    province: '',
    district: '',
    companyName: '',
    address: '',
    emailUpdates: 'no',
  });

  const [error, setError] = useState(''); // State to handle errors
  const navigate = useNavigate(); // Initialize navigate

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous error

    // Check if passwords match
    if (formData.password !== formData.verifyPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate successful registration logic
    console.log('Form data submitted:', formData);

    // Navigate to the Home page after submission
    navigate('/home');
  };

  return (
    <div className="form-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-column">
          <label>
            <span style={{ color: 'red' }}>*</span> Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>
            <span style={{ color: 'red' }}>*</span> User Name
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>
            <span style={{ color: 'red' }}>*</span> Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>
            <span style={{ color: 'red' }}>*</span> Verify Password
          </label>
          <input
            type="password"
            name="verifyPassword"
            value={formData.verifyPassword}
            onChange={handleChange}
            required
          />

          <label>
            <span style={{ color: 'red' }}>*</span> Your Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>

          <label>
            <span style={{ color: 'red' }}>*</span> First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-column">
          <label>
            <span style={{ color: 'red' }}>*</span> Address Type
          </label>
          <select
            name="addressType"
            value={formData.addressType}
            onChange={handleChange}
            required
          >
            <option value="home">Home</option>
            <option value="work">Work</option>
          </select>

          <label>
            <span style={{ color: 'red' }}>*</span> Province
          </label>
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          >
            <option value="">Select Province</option>
            <option value="province1">Central Province</option>
            <option value="province2">Eastern Province</option>
            <option value="province3">North Central Province</option>
            <option value="province4">Northern Province</option>
            <option value="province5">North Western Province</option>
            <option value="province6">Sabaragamuwa Province</option>
            <option value="province7">Southern Province</option>
            <option value="province8">Uva Province</option>
            <option value="province9">Western Province</option>
          </select>

          <label>District</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
          >
            <option value="">Select District</option>
            <option value="district1">Ampara</option>
            <option value="district2">Anuradhapura</option>
            <option value="district3">Badulla</option>
            <option value="district4">Batticaloa</option>
            <option value="district5">Colombo</option>
            <option value="district6">Galle</option>
            <option value="district7">Gampaha</option>
            <option value="district8">Hambantota</option>
            <option value="district9">Jaffna</option>
            <option value="district10">Kalutara</option>
            <option value="district11">Kandy</option>
            <option value="district12">Kegalle</option>
            <option value="district13">Kilinochchi</option>
            <option value="district14">Kurunegala</option>
            <option value="district15">Mannar</option>
            <option value="district16">Matale</option>
            <option value="district17">Matara</option>
            <option value="district18">Monaragala</option>
            <option value="district19">Mullaitivu</option>
            <option value="district20">Nuwara Eliya</option>
            <option value="district21">Polonnaruwa</option>
            <option value="district22">Puttalam</option>
            <option value="district23">Ratnapura</option>
            <option value="district24">Trincomalee</option>
            <option value="district25">Vavuniya</option>
          </select>

          <label>
            <span style={{ color: 'red' }}>*</span> Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>

          <div className="email-updates">
            <label>Sign up for email updates</label>
            <div className="radio-buttons">
              <div className="radio-option">
                <label>
                  <input
                    type="radio"
                    name="emailUpdates"
                    value="yes"
                    checked={formData.emailUpdates === 'yes'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
              </div>
              <div className="radio-option">
                <label>
                  <input
                    type="radio"
                    name="emailUpdates"
                    value="no"
                    checked={formData.emailUpdates === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        {error && <p className="error">{error}</p>} {/* Display error if exists */}

        <div className="form-actions">
          <button type="submit">Register</button>
        </div>

        <div className="help-section">
          <span>Need help? </span>
          <a href="mailto:sample@gmail.com">sample@gmail.com</a>
        </div>

        <div>
          <BackButton />
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
