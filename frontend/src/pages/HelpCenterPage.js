import React from 'react';

const HelpCenterPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Help Center
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
              <p className="mb-2"><strong>How does the AI Career Assessment work?</strong></p>
              <p>
                Our assessment uses a series of questions to understand your personality, interests, and skills. The AI then compares your profile to thousands of career paths to find your best match.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Account Issues</h2>
              <p className="mb-2"><strong>I can't log in to my account.</strong></p>
              <p>
                If you've forgotten your password, please use the "Forgot Password" link on the login page. If you're still having trouble, please contact our support team.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;