import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  // Using a single state object for the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    education_level: '',
    interests: '', // We'll send this as a comma-separated string
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  // Handle input changes
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

    // Frontend validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);

    try {
      // Prepare data for the API
      const apiData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        education_level: formData.education_level,
        // Convert comma-separated string to an array for the backend
        interests: formData.interests.split(',').map(item => item.trim()),
      };
      
      // Call signup function from context
      const data = await signup(apiData);
      
      setSuccess(data.message + ". Please log in.");
      // Redirect to login after 2 seconds
      setTimeout(() => navigate('/login'), 2000);

    } catch (err) {
      setError(err.response?.data?.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Create Account</h2>
        
        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}
        
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text" name="name" id="name"
            value={formData.name} onChange={handleChange} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email" name="email" id="email"
            value={formData.email} onChange={handleChange} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password" name="password" id="password"
            value={formData.password} onChange={handleChange} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password" name="confirmPassword" id="confirmPassword"
            value={formData.confirmPassword} onChange={handleChange} required
          />
        </div>
         <div className="form-group">
          <label htmlFor="education_level">Education Level</label>
          <input
            type="text" name="education_level" id="education_level"
            value={formData.education_level} onChange={handleChange}
            placeholder="e.g., High School, Bachelor's"
          />
        </div>
         <div className="form-group">
          <label htmlFor="interests">Interests (comma-separated)</label>
          <input
            type="text" name="interests" id="interests"
            value={formData.interests} onChange={handleChange}
            placeholder="e.g., Coding, Design, Marketing"
          />
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
        <div className="auth-links">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;