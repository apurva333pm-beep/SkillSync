import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative overflow-hidden py-24 text-center">
      
      {/* Blob 1 */}
      <div 
        className="absolute hidden rounded-full opacity-30 blur-3xl 
                   transition-all animate-float lg:block"
        style={{ 
          width: '300px', 
          height: '300px', 
          top: '-50px', 
          left: '0px',
          backgroundColor: 'rgb(99 102 241 / 0.5)', 
        }}
      ></div>
      
      {/* Blob 2 */}
      <div 
        className="absolute hidden rounded-full opacity-30 blur-3xl 
                   transition-all animate-float lg:block"
        style={{
          width: '250px',
          height: '250px',
          bottom: '-50px',
          right: '0px',
          backgroundColor: 'rgb(168 85 247 / 0.5)',
          animationDuration: '8s', 
        }}
      ></div>

      {/* The rest of the content is positioned 'relative' to sit on top */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
          Your Journey to{' '}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Success
          </span><p>
          {' '}Starts Here</p>
        </h1>
        
        {/* --- THIS IS THE FIX --- */}
        {/* The broken <img> tag has been removed from inside this <p> tag */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Discover your ideal career path with AI-powered
          recommendations, expert counselling, and personalized roadmaps.
        </p> 
        {/* --- END OF FIX --- */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/intro-form"
            className="rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Let's Begin &rarr;
          </Link>
          <Link
            to="/signup"
            className="rounded-md bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700"
          >
            Sign In / Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;