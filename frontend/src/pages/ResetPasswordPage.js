import React, { useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function ResetPasswordPage() {
  // ... (rest of the state/functions are the same)
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  // We KEEP the indigo focus ring as an accent
  const inputStyle = "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";

  const handleSubmit = async (e) => {
    // ... (rest of the function is the same)
    e.preventDefault();
    setError(null); setSuccess(null);
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match'); return;
    }
    setLoading(true);
    try {
      const { data } = await api.post('/auth/reset-password', { token, newPassword });
      setSuccess(data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Error resetting password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg dark:bg-gray-800">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Reset Your Password
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <div className="rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700 dark:bg-red-200">{error}</div>}
          {success && (
            <div className="rounded-md border border-green-400 bg-green-100 p-3 text-sm text-green-700 dark:bg-green-200">
              {success}!{' '}
              <Link to="/login" className="font-bold underline">Click here to Login</Link>
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="token" className="sr-only">Reset Token</label>
              <input
                id="token" name="token" type="text" required
                className={inputStyle} placeholder="Paste your reset token"
                value={token} onChange={(e) => setToken(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="sr-only">New Password</label>
              <input
                id="newPassword" name="newPassword" type="password" required
                className={inputStyle} placeholder="New Password"
                value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm New Password</label>
              <input
                id="confirmPassword" name="confirmPassword" type="password" required
                className={inputStyle} placeholder="Confirm New Password"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              // UPDATED: Reverted button to black/white theme
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ResetPasswordPage;