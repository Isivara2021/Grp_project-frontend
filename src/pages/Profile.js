import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.profileImage || 'default-profile.png');
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
    }
  };

  return (
    <div className="profile-page">
      {/* Header: Left (Profile Text & Welcome) / Right (Profile Picture) */}
      <div className="profile-header">
        {/* Left Section: Profile Title & Welcome Message */}
        <div className="profile-info">
        <a href="/profile" className="profile-title">Profile</a>
          <p className="welcome-message">Welcome Mr. {userData.firstName} {userData.lastName}!</p>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="profile-picture-container">
          <img src={profileImage} className="profile-picture" />
          {isEditing && <input type="file" accept="image/*" onChange={handleProfilePictureChange} />}
        </div>
      </div>

      <div className="profile-container">
        {/* User Details */}
        <div className="card">
          <h2>User Details</h2>
          <div className="details">
            {Object.entries(userData).map(([key, value]) => (
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
            ))}
          </div>
          <div class="donation-history">
            <h3><span>Donation History: </span></h3>
            <div class="donation-link-container">
              <a href="#DonationHistory" class="donation-link">Click here</a>
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
