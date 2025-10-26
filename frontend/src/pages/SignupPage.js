import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    education_level: '',
    interests: '',
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
      const apiData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        education_level: formData.education_level,
        interests: formData.interests.split(',').map(item => item.trim()),
      };
      
      const data = await signup(apiData);
      setSuccess(data.message + ". Please log in.");
      setTimeout(() => navigate('/login'), 2000);

    } catch (err) {
      setError(err.response?.data?.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };
  
  // Reusable input field style
  const inputStyle = "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";


  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg dark:bg-gray-800">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <div className="rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700 dark:bg-red-200">{error}</div>}
          {success && <div className="rounded-md border border-green-400 bg-green-100 p-3 text-sm text-green-700 dark:bg-green-200">{success}</div>}
          
          <div className="space-y-4">
            {/* We map over the fields to reduce repetition */}
            {[
              { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Full Name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'Email address' },
              { label: 'Password', name: 'password', type: 'password', placeholder: 'Password' },
              { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
              { label: 'Education Level', name: 'education_level', type: 'text', placeholder: "e.g., Bachelor's" },
              { label: 'Interests', name: 'interests', type: 'text', placeholder: 'e.g., Coding, Design (comma-separated)' },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="sr-only">{field.label}</label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  className={inputStyle}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>
          
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;