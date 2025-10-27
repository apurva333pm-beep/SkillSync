import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react'; // Icon from your screenshot

// This component will contain the logic for *both* login and signup
function AuthTabs({ defaultTab }) {
  // 'defaultTab' will be "login" or "signup"
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="flex min-h-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        
        {/* Icon and Header */}
        <div className="flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Welcome to SkillSync
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Sign in to your account or create a new one
          </p>
        </div>

        {/* The main card with tabs */}
        <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 sm:p-8">
          
          {/* Tab Buttons */}
          <div className="mb-6 grid grid-cols-2 gap-2 rounded-md bg-gray-100 p-1 dark:bg-gray-700">
            <button
              onClick={() => setActiveTab('login')}
              // This logic changes the style of the active tab
              className={`rounded px-4 py-2 text-sm font-medium transition-colors
                ${activeTab === 'login'
                  ? 'bg-white text-gray-900 shadow dark:bg-gray-800 dark:text-white' // Active
                  : 'text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600' // Inactive
                }
              `}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors
                ${activeTab === 'signup'
                  ? 'bg-white text-gray-900 shadow dark:bg-gray-800 dark:text-white' // Active
                  : 'text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600' // Inactive
                }
              `}
            >
              Sign Up
            </button>
          </div>

          {/* Conditionally render the correct form based on the active tab */}
          {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
}

// --- LOGIN FORM (Internal Component) ---
// We define this inside the same file to keep things clean.
function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      // On successful login, go to the dashboard [cite: 330]
      navigate('/dashboard'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  // Input style with accent color
  const inputStyle = "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700 dark:bg-red-200">
          {error}
        </div>
      )}
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            id="email" type="email" required className={inputStyle}
            placeholder="Enter your email"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <input
            id="password" type="password" required className={inputStyle}
            placeholder="Enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-end text-sm">
        <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
          Forgot your password?
        </Link>
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          // This is the black/white button style from your homepage
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </div>
    </form>
  );
}


// --- SIGNUP FORM (Internal Component) ---
// Also defined in the same file
function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      // We only send the fields the backend needs for *basic* signup
      // The other fields (education, interests) are in the IntroForm [cite: 337, 466]
      const apiData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      const data = await signup(apiData);
      setSuccess(data.message + ". Please Sign In to continue.");
      // Clear form on success
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };
  
  // Input style with accent color
  const inputStyle = "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700 dark:bg-red-200">{error}</div>}
      {success && <div className="rounded-md border border-green-400 bg-green-100 p-3 text-sm text-green-700 dark:bg-green-200">{success}</div>}
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name-signup" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <input
            id="name-signup" type="text" required className={inputStyle}
            placeholder="Enter your full name"
            value={formData.name} name="name" onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email-signup" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            id="email-signup" type="email" required className={inputStyle}
            placeholder="Enter your email"
            value={formData.email} name="email" onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password-signup" className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <input
            id="password-signup" type="password" required className={inputStyle}
            placeholder="Create a password"
            value={formData.password} name="password" onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword-signup" className="text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
          <input
            id="confirmPassword-signup" type="password" required className={inputStyle}
            placeholder="Confirm your password"
            value={formData.confirmPassword} name="confirmPassword" onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
}

export default AuthTabs;