import React, { useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setToken(null);
    setLoading(true);

    try {
      // Call the /api/auth/forgot-password endpoint
      const { data } = await api.post('/auth/forgot-password', { email });
      setSuccess(data.message + ". Copy the token below.");
      setToken(data.resetToken); // Show the token
    } catch (err) {
      setError(err.response?.data?.message || 'Error sending reset token');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Forgot Password</h2>
        
        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}

        {/* If token is generated, show it */}
        {token && (
          <div className="alert info">
            <strong>Your Reset Token:</strong>
            <p style={{ wordBreak: 'break-all' }}>{token}</p>
            <Link to="/reset-password">Go to Reset Password Page &rarr;</Link>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Sending...' : 'Get Reset Token'}
        </button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;