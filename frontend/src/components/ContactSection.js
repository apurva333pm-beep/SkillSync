import React from 'react';
import { Link } from 'react-router-dom';

function ContactSection() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Have Questions?
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Our team is here to help you get started on your career journey.
        </p>
        <div className="mt-10">
          {/* This button can link to a future "/contact" page */}
          <Link
            to="/contact"
            className="rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;