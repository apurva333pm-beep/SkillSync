import React, { useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  // ... (rest of the state/functions are the same)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [token, setToken] = useState(null);
  
  // We KEEP the indigo focus ring as an accent
  const inputStyle = "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";

  const handleSubmit = async (e) => {
    // ... (rest of the function is the same)
    e.preventDefault();
    setError(null); setSuccess(null); setToken(null); setLoading(true);
    try {
      const { data } = await api.post('/auth/forgot-password', { email });
      setSuccess(data.message + ". Copy the token below.");
      setToken(data.resetToken);
    } catch (err) {
      setError(err.response?.data?.message || 'Error sending reset token');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg dark:bg-gray-800">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Forgot Password
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <div className="rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700 dark:bg-red-200">{error}</div>}
          {success && <div className="rounded-md border border-green-400 bg-green-100 p-3 text-sm text-green-700 dark:bg-green-200">{success}</div>}
          
          {token && (
            // We KEEP the indigo token box as an accent
            <div className="rounded-md border border-indigo-400 bg-indigo-100 p-4 text-sm text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              <strong>Your Reset Token:</strong>
              <p className="mt-2 break-all font-mono">{token}</p>
              <Link to="/reset-password" className="mt-2 inline-block font-bold text-indigo-700 dark:text-indigo-300">
                Go to Reset Password Page &rarr;
              </Link>
            </div>
          )}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email" name="email" type="email" required
              className={inputStyle} placeholder="Enter your email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              // UPDATED: Reverted button to black/white theme
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              {loading ? 'Sending...' : 'Get Reset Token'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPasswordPage;