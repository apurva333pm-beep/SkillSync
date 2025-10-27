import React from 'react';
// Import the icons
import { GraduationCap, Users, TrendingUp, BookOpen } from 'lucide-react';

// Define the features with their unique colors
const features = [
  {
    // UPDATED: Pink/Rose theme
    icon: <GraduationCap size={40} className="text-rose-500" />,
    background: "bg-rose-100", // Light mode background
    title: 'AI-Powered Recommendations',
    description: 'Get personalized career suggestions based on your interests, skills, and goals.',
  },
  {
    // UPDATED: Purple theme
    icon: <Users size={40} className="text-purple-500" />,
    background: "bg-purple-100",
    title: 'Expert Counselling',
    description: 'Connect with experienced career counsellors for one-on-one guidance.',
  },
  {
    // UPDATED: Indigo/Blue theme
    icon: <TrendingUp size={40} className="text-indigo-500" />,
    background: "bg-indigo-100",
    title: 'Career Roadmaps',
    description: 'Follow structured paths to achieve your career goals with clear milestones.',
  },
  {
    // UPDATED: Teal/Green theme
    icon: <BookOpen size={40} className="text-teal-500" />,
    background: "bg-teal-100",
    title: 'Learning Resources',
    description: 'Access curated resources to develop the skills you need for success.',
  },
];

function Features() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Why Choose SkillSync?
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            We combine cutting-edge technology with human expertise to guide you
            toward your ideal career.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-xl dark:bg-gray-800"
            >
              {/* UPDATED: Backgrounds are now unique and use the dark mode
                  background from your screenshot (neutral gray) */}
              <div 
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full 
                            ${feature.background} dark:bg-gray-700`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;