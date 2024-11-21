import React from 'react';
import '../styles/Profile.css';

const Profile = ({ user }) => {
  // Destructure user details with default values using nullish coalescing operator (??)
  const {
    firstName = 'N/A',
    lastName = 'N/A',
    companyName = 'Not Provided',
    occupation = 'Not Specified',
    city = 'Unknown',
    email = 'No Email Provided',
    telephone = 'No Contact Number',
    firstAccess = 'Not Recorded',
    lastAccess = 'Not Recorded',
    activities = [],
  } = user ?? {}; // If `user` itself is undefined/null, default to an empty object.

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="welcome-message">
        Welcome Mr. {firstName} {lastName}!
      </div>
      <div className="profile-container">
        {/* User Details */}
        <div className="card">
          <h2>User Details</h2>
          <div className="details">
            <p><span>First name:</span> {firstName}</p>
            <p><span>Last name:</span> {lastName}</p>
            <p><span>Company name:</span> {companyName}</p>
            <p><span>Occupation:</span> {occupation}</p>
            <p><span>City/ Town:</span> {city}</p>
            <p><span>Email:</span> {email}</p>
            <p><span>Telephone:</span> {telephone}</p>
          </div>
        </div>

        {/* Login Activities */}
        <div className="card">
          <h2>Login Activities</h2>
          <div className="details">
            <p><span>First access to site:</span> {firstAccess}</p>
            <p><span>Last access to site:</span> {lastAccess}</p>
            <p><span>Activities did through last month:</span></p>
            <div className="activity-placeholder">
              {activities && activities.length > 0 ? (
                activities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    {activity}
                  </div>
                ))
              ) : (
                <p>No activities recorded.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
