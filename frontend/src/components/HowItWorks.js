import React from 'react';
import { ArrowRight } from 'lucide-react'; // Icon for the arrow

function HowItWorks() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Get started on your career journey in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          
          {/* Step 1 - UPDATED */}
          <div className="flex flex-1 flex-col items-center text-center">
            {/* Switched from indigo to the black/white theme */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-2xl font-bold text-white dark:bg-white dark:text-gray-900">
              1
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Complete Assessment
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Answer questions about your interests, skills, and goals.
            </p>
          </div>

          <ArrowRight size={40} className="hidden text-gray-400 dark:text-gray-600 md:block" />

          {/* Step 2 - UPDATED */}
          <div className="flex flex-1 flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-2xl font-bold text-white dark:bg-white dark:text-gray-900">
              2
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Get Recommendations
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Receive AI-powered career suggestions tailored to you.
            </p>
          </div>
          
          <ArrowRight size={40} className="hidden text-gray-400 dark:text-gray-600 md:block" />

          {/* Step 3 - UPDATED */}
          <div className="flex flex-1 flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-2xl font-bold text-white dark:bg-white dark:text-gray-900">
              3
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Follow Your Path
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Access roadmaps, resources, and expert guidance.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HowItWorks;