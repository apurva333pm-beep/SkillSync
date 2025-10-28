import React from 'react';
import { Link } from 'react-router-dom';

function CtaSection() {
  return (
    // This div creates the purple/indigo gradient background
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to Discover Your Perfect Career?
        </h2>
        <p className="mt-6 text-lg text-indigo-100">
          Join thousands of students who have found their path to success.
        </p>
        <div className="mt-10">
          {/* We use the same primary black button style for consistency */}
          <Link
            to="/signup"
            className="rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Get Started Free &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;