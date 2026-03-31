import React, { useState, useEffect } from 'react';
import API from './services/api';
import './ApplicationForm.css';

function ApplicationForm({ jobId, onClose, onSuccess, user, setUser }) { // Added user prop
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    degree: '',
    major: '',
  });

  useEffect(() => {
    if (user) { // Use the user prop directly
      setFormData(prevData => ({
        ...prevData,
        name: user.name || '',
        email: user.email || '',
        degree: user.degree || '', // Pre-fill degree from user prop
        major: user.major || '',   // Pre-fill major from user prop
      }));
    }
  }, [user]); // Depend on user prop

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You must be logged in to apply.');
      return;
    }

    try {
      const res = await API.post('/apply', { ...formData, jobId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(res.data.message);
      onSuccess();
      // Update user's degree and major in local storage and global state
      const updatedUser = { ...user, degree: formData.degree, major: formData.major };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (err) {
      console.error('Error applying for job:', err);
      alert('Error applying for job. Please ensure all fields are filled correctly.');
    }
  };

  return (
    <div className="application-modal-overlay">
      <div className="application-modal-content">
        <h2>Apply for Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="major">Major:</label>
            <input
              type="text"
              id="major"
              name="major"
              value={formData.major}
              onChange={handleChange}
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="form-button">Submit Application</button>
            <button type="button" className="form-button-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;