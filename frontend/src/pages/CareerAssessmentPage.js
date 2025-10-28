import React from 'react';
import { Link } from 'react-router-dom'; // --- THIS IS THE FIX ---
// Import our new stepper component
import AssessmentStepper from '../components/AssessmentStepper';

function CareerAssessmentPage() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* --- ADD THE STEPPER, set to step 2 --- */}
      <AssessmentStepper currentStep={2} />

      {/* --- Main Test Card --- */}
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Career Assessment Test
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Answer the following questions to help us understand your interests and personality.
        </p>

        {/* --- Placeholder for your ML Test Questions --- */}
        <div className="mt-8 space-y-8">
          
          {/* Question 1 */}
          <fieldset>
            <legend className="text-base font-medium text-gray-900 dark:text-white">
              <span className="font-bold">1/20:</span> I enjoy working with my hands and tools.
            </legend>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center">
                <input id="q1-1" name="q1" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="q1-1" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">Strongly Disagree</label>
              </div>
              <div className="flex items-center">
                <input id="q1-2" name="q1" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="q1-2" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">Disagree</label>
              </div>
              <div className="flex items-center">
                <input id="q1-3" name="q1" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="q1-3" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">Neutral</label>
              </div>
              <div className="flex items-center">
                <input id="q1-4" name="q1" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="q1-4" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">Agree</label>
              </div>
              <div className="flex items-center">
                <input id="q1-5" name="q1" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="q1-5" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">Strongly Agree</label>
              </div>
            </div>
          </fieldset>
          
          {/* Question 2 */}
          <fieldset>
            <legend className="text-base font-medium text-gray-900 dark:text-white">
              <span className="font-bold">2/20:</span> I am good at creative writing.
            </legend>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              {/* ... options ... */}
              <div className="flex items-center">
                <input id="q2-1" name="q2" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="q2-1" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">Strongly Disagree</label>
              </div>
              <div className="flex items-center">
                <input id="q2-2" name="q2" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="q2-2" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">Disagree</label>
              </div>
              {/* ... etc ... */}
            </div>
          </fieldset>
          
          {/* --- End of Placeholder --- */}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between border-t border-gray-200 pt-6 dark:border-gray-700">
            {/* This <Link> is the component that was causing the error */}
            <Link
              to="/intro-form" // Go back to the previous step
              className="rounded-md bg-white px-5 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-600"
            >
              ← Back to Personal Info
            </Link>
            <button
              type="button"
              className="rounded-md bg-gray-900 px-6 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerAssessmentPage;