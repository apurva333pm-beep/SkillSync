import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mt-20 rounded-lg bg-white p-12 shadow-xl dark:bg-gray-800">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          Welcome to <span className="text-blue-600 dark:text-blue-500">SkillSync</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Your AI-powered career recommendation platform.
        </p>
        <Link
          to="/signup"
          className="mt-8 inline-block rounded-md bg-blue-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default HomePage;