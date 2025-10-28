import React from 'react';
// Import icons
import { CheckCircle, Edit3 } from 'lucide-react';

// Define the steps for the entire assessment
const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Career Assessment' },
  { id: 3, name: 'Review Results' },
];

/**
 * A reusable stepper component for the assessment.
 * @param {object} props
 * @param {number} props.currentStep - The current active step (e.g., 1, 2, or 3)
 */
function AssessmentStepper({ currentStep }) {
  return (
    <nav className="w-full max-w-2xl mx-auto mb-12" aria-label="Progress">
      <ol className="flex items-start">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative flex-1">
            {/* This div connects the steps with a line */}
            {stepIdx !== steps.length - 1 ? (
              <div 
                className="absolute left-1/2 top-4 -ml-px h-0.5 w-full" 
                aria-hidden="true"
              >
                {/* Line color changes if this step is completed */}
                <div className={`h-full w-full ${currentStep > step.id ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
              </div>
            ) : null}
            
            {currentStep > step.id ? (
              // --- COMPLETED Step ---
              <div className="group relative flex flex-col items-center">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                  <CheckCircle className="h-5 w-5 text-white" />
                </span>
                <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{step.name}</span>
              </div>
            ) : currentStep === step.id ? (
              // --- ACTIVE Step ---
              <div className="group relative flex flex-col items-center" aria-current="step">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white dark:bg-gray-800">
                  <Edit3 className="h-5 w-5 text-indigo-600" />
                </span>
                <span className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">{step.name}</span>
              </div>
            ) : (
              // --- UPCOMING Step ---
              <div className="group relative flex flex-col items-center">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800">
                  {/* Inner dot */}
                  <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                </span>
                <span className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default AssessmentStepper;