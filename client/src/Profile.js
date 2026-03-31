import React, { useState, useEffect } from 'react';
import API from './services/api'; // Import API for backend calls
import './Profile.css';

function Profile({ user, handleLogout, setUser }) { // Add setUser to props
  console.log("Profile component received user:", user); // Add this line
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    degree: user.degree || '',
    major: user.major || '',
  });

  useEffect(() => {
    setProfileData({
      name: user.name,
      email: user.email,
      degree: user.degree || '',
      major: user.major || '',
    });
  }, [user]);

  if (!user) {
    return <div className="profile-container">Please log in to view your profile.</div>;
  }

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await API.put('/profile', {
        degree: profileData.degree,
        major: profileData.major,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);
      // Update local storage and global user state
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
    } catch (err) {
      console.error('Error updating profile:', err);
      alert('Error updating profile. Please try again.');
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={profileData.name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={profileData.email} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={profileData.degree}
            onChange={handleChange}
            placeholder="e.g., Bachelor of Science"
          />
        </div>
        <div className="form-group">
          <label htmlFor="major">Major:</label>
          <input
            type="text"
            id="major"
            name="major"
            value={profileData.major}
            onChange={handleChange}
            placeholder="e.g., Computer Science"
          />
        </div>
        <button type="submit" className="form-button">Update Profile</button>
      </form>
      <button onClick={handleLogout} className="form-button logout-button">Logout</button>
    </div>
  );
}

export default Profile;