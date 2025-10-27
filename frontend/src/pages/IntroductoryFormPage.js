import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
// Import our new stepper component
import AssessmentStepper from '../components/AssessmentStepper';

function IntroductoryFormPage() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  
  // New form state based on your screenshots
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'Prefer not to say', // Default value
    education_level: '',
    country: '',
    state: '',
    city: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pre-fill form with user data if it exists from context/localStorage
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        // Split 'name' back into first/last if it exists
        firstName: user.firstName || (user.name ? user.name.split(' ')[0] : ''),
        lastName: user.lastName || (user.name ? user.name.split(' ').slice(1).join(' ') : ''),
        age: user.age || '',
        gender: user.gender || 'Prefer not to say',
        education_level: user.education_level || '',
        country: user.country || 'India', // Set a default
        state: user.state || '',
        city: user.city || '',
      }));
    }
  }, [user]); // Re-run when user object is loaded

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Prepare the data for our updateProfile function
      const profileData = {
        ...formData,
        // Combine first/last into 'name' for the backend
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        age: Number(formData.age) || null,
      };

      // Send all data. The updated AuthContext function will handle it.
      await updateProfile(profileData);
      
      // On success, navigate to the next step
      navigate('/career-assessment'); 

    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save details');
    } finally {
      setLoading(false);
    }
  };
  
  // Reusable input/select field style
  const inputStyle = "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* --- ADD THE STEPPER --- */}
      <AssessmentStepper currentStep={1} />
    
      {/* --- Main Form Card --- */}
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Personal Information
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Tell us a bit about yourself. This information will be used to
          provide you with personalized career recommendations.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          {error && <div className="mb-4 rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700 dark:bg-red-200">{error}</div>}
          
          {/* Form fields in a grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
              <input type="text" name="firstName" id="firstName" required className={inputStyle}
                      value={formData.firstName} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
              <input type="text" name="lastName" id="lastName" required className={inputStyle}
                      value={formData.lastName} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
              <input type="number" name="age" id="age" required className={inputStyle}
                      value={formData.age} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
              <select id="gender" name="gender" className={inputStyle}
                      value={formData.gender} onChange={handleChange}>
                <option>Prefer not to say</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="education_level" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Education Level</label>
              <select id="education_level" name="education_level" required className={inputStyle}
                      value={formData.education_level} onChange={handleChange}>
                <option value="" disabled>Select your education</option>
                <option>High School</option>
                <option>Some College</option>
                <option>Associate's Degree</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>Doctorate (Ph.D.)</option>
              </select>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
              <input type="text" name="country" id="country" required className={inputStyle}
                      value={formData.country} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300">State / Province</label>
              <input type="text" name="state" id="state" required className={inputStyle}
                      value={formData.state} onChange={handleChange} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">City</label>

              <input type="text" name="city" id="city" required className={inputStyle}
                      value={formData.city} onChange={handleChange} />
            </div>
          </div>
          
          {/* Next Button */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-gray-900 px-6 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              {loading ? 'Saving...' : 'Next: Career Assessment →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IntroductoryFormPage;