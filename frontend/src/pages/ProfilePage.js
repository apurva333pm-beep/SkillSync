import React, { useState, useEffect } from 'react';
// Import useAuth to get the 'logout' function
import { useAuth } from '../hooks/useAuth';

function ProfilePage() {
  // Get 'user', 'updateProfile', and 'logout' from our hook
  const { user, updateProfile, logout } = useAuth(); 
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education_level: '',
    interests: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        age: user.age || '',
        education_level: user.education_level || '',
        interests: Array.isArray(user.interests) ? user.interests.join(', ') : '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This is for the "Save Changes" button
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const apiData = {
        ...formData,
        interests: formData.interests.split(',').map(item => item.trim()),
        age: Number(formData.age) || null,
      };
      const message = await updateProfile(apiData);
      setSuccess(message);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };
  
  // Input style
  const inputStyle = "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";
  const disabledInputStyle = `${inputStyle} cursor-not-allowed bg-gray-100 dark:bg-gray-800 opacity-70`;

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* --- Main Profile Form --- */}
        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Edit Your Profile
            </h2>
            
            {error && <div className="rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700 dark:bg-red-200">{error}</div>}
            {success && <div className="rounded-md border border-green-400 bg-green-100 p-3 text-sm text-green-700 dark:bg-green-200">{success}</div>}
            
            <div className="space-y-4">
              {/* Email (Disabled) */}
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email (Cannot be changed)</label>
                <input id="email" type="email" value={user?.email || ''} disabled className={disabledInputStyle} />
              </div>
              
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <input id="name" name="name" type="text" className={inputStyle} value={formData.name} onChange={handleChange} />
              </div>
              
              {/* Age */}
              <div>
                <label htmlFor="age" className="text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
                <input id="age" name="age" type="number" className={inputStyle} value={formData.age} onChange={handleChange} />
              </div>
              
              {/* Education Level */}
              <div>
                <label htmlFor="education_level" className="text-sm font-medium text-gray-700 dark:text-gray-300">Education Level</label>
                <input id="education_level" name="education_level" type="text" className={inputStyle} value={formData.education_level} onChange={handleChange} />
              </div>
              
              {/* Interests */}
              <div>
                <label htmlFor="interests" className="text-sm font-medium text-gray-700 dark:text-gray-300">Interests (comma-separated)</label>
                <input id="interests" name="interests" type="text" className={inputStyle} value={formData.interests} onChange={handleChange} />
              </div>
            </div>

            {/* Save Changes Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
        
        {/* --- ADDED: Logout Button Section --- */}
        <div className="mt-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Not {user?.name}? Sign out of your account.
            </p>
            {/* Red logout button that calls the logout function */}
            <button
              onClick={logout}
              className="mt-4 w-full rounded-md border border-red-500 bg-transparent py-2 px-4 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-900/20"
            >
              Log Out
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProfilePage;