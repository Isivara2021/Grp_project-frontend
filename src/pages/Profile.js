import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.profileImage || '/default-profile.png');
  const [userData, setUserData] = useState({
    firstName: user?.firstName ?? 'N/A',
    lastName: user?.lastName ?? 'N/A',
    companyName: user?.companyName ?? 'Not Provided',
    occupation: user?.occupation ?? 'Not Specified',
    city: user?.city ?? 'Unknown',
    email: user?.email ?? 'No Email Provided',
    telephone: user?.telephone ?? 'No Contact Number',
    firstAccess: user?.firstAccess ?? 'Not Recorded',
    lastAccess: user?.lastAccess ?? 'Not Recorded',
    activities: user?.activities ?? [],
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle profile picture upload
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);

      // Revoke object URL after setting it (prevents memory leaks)
      setTimeout(() => URL.revokeObjectURL(imageURL), 5000);
    }
  };

  return (
    <div className="profile-page">
      {/* Header: Profile Title & Profile Picture */}
      <div className="profile-header">
        <div className="profile-info">
          <Link to="/profile" className="profile-title">Profile</Link>
          <p className="welcome-message">Welcome, Mr. {userData.firstName} {userData.lastName}!</p>
        </div>
        <div className="profile-picture-container">
          <img src={profileImage} className="profile-picture" />
          {isEditing && <input type="file" accept="image/*" onChange={handleProfilePictureChange} />}
        </div>
      </div>

      {/* Profile Details */}
      <div className="profile-container">
        {/* User Details */}
        <div className="card">
          <h2>User Details</h2>
          <div className="details">
            {Object.entries(userData).map(([key, value]) =>
              key !== "activities" && key !== "firstAccess" && key !== "lastAccess" ? (
                <p key={key}>
                  <span>{key.replace(/([A-Z])/g, ' $1')}: </span>
                  {isEditing ? (
                    <input type="text" name={key} value={value} onChange={handleChange} />
                  ) : (
                    value
                  )}
                </p>
              ) : null
            )}
          </div>

          {/* Donation History Section */}
          <div className="donationhistory">
            <h3>Donation History:</h3>
            <div className="donation-link-container">
              <Link to="/donation-history" className="donation-link">Click here</Link>
            </div>
          </div>
        </div>

        {/* Login Activities */}
        <div className="card">
          <h2>Login Activities</h2>
          <div className="details">
            <p><span>First access to site:</span> {userData.firstAccess}</p>
            <p><span>Last access to site:</span> {userData.lastAccess}</p>
            <p><span>Activities in the last month:</span></p>
            <div className="activity-placeholder">
              {userData.activities.length > 0 ? (
                userData.activities.map((activity, index) => (
                  <div key={index} className="activity-item">{activity}</div>
                ))
              ) : (
                <p>No activities recorded.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="edit-button-container">
        <button type="button" className="edit-button" onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
