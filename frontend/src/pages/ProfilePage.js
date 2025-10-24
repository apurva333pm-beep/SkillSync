import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

function ProfilePage() {
  const { user, updateProfile } = useAuth();
  
  // Initialize form state with user data from context
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education_level: '',
    interests: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // When the component loads, fill the form with the current user's data
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        age: user.age || '',
        education_level: user.education_level || '',
        // Join the interests array back into a comma-separated string for editing
        interests: Array.isArray(user.interests) ? user.interests.join(', ') : '',
      });
    }
  }, [user]); // Re-run this effect if the user object changes

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      // Prepare data for the API
      const apiData = {
        ...formData,
        // Convert interests string back to an array
        interests: formData.interests.split(',').map(item => item.trim()),
        age: Number(formData.age) || null, // Ensure age is a number
      };

      // Call updateProfile function from context
      const message = await updateProfile(apiData);
      setSuccess(message);

    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Edit Profile</h2>
        
        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}
        
        {/* Email is unique and used for login, so we don't let them edit it here */}
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={user?.email || ''} disabled />
        </div>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text" name="name" id="name"
            value={formData.name} onChange={handleChange}
          />
        </div>
        
         <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number" name="age" id="age"
            value={formData.age} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="education_level">Education Level</label>
          <input
            type="text" name="education_level" id="education_level"
            value={formData.education_level} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="interests">Interests (comma-separated)</label>
          <input
            type="text" name="interests" id="interests"
            value={formData.interests} onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;