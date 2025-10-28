import React, { useState } from 'react';
// Import an icon for the header
import { Mail } from 'lucide-react';

function ContactPage() {
  // State for the form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  
  // State for loading and success/error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This is a "fake" submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    setError(null);
    setSuccess(null);
    setLoading(true);

    // --- In a real app, you would send this to your backend ---
    // Example: await api.post('/contact', formData);
    console.log('Contact Form Submitted:', formData);
    // --- End of real app logic ---

    // We'll simulate a network request with a 1-second delay
    setTimeout(() => {
      setLoading(false);
      setSuccess('Thank you for your message! We will get back to you soon.');
      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    }, 1000);
  };

  // Reusable input style
  const inputStyle = "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";

  return (
    <div className="flex min-h-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8">
        
        {/* Header Icon and Title */}
        <div className="flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900">
            <Mail size={32} />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Success & Error Messages */}
            {error && <div className="rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700 dark:bg-red-200">{error}</div>}
            {success && <div className="rounded-md border border-green-400 bg-green-100 p-3 text-sm text-green-700 dark:bg-green-200">{success}</div>}

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                <input
                  type="text" name="firstName" id="firstName" required
                  className={inputStyle} value={formData.firstName} onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                <input
                  type="text" name="lastName" id="lastName" required
                  className={inputStyle} value={formData.lastName} onChange={handleChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email" name="email" id="email" required
                  className={inputStyle} value={formData.email} onChange={handleChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message" id="message" rows={4} required
                  className={inputStyle} value={formData.message} onChange={handleChange}
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;