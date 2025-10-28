import React from 'react';
// Import the icons we'll use
import { Target, BookText, Users, Code, Database, BrainCircuit } from 'lucide-react';
// Import the CTA section we already built
import CtaSection from '../components/CtaSection';

// --- Section 1: Our Mission ---
function MissionSection() {
  return (
    <div className="py-16 sm:py-24 text-center">
      
      {/* --- THIS IS THE FIX --- */}
      {/* I replaced "blob" with the full set of Tailwind classes */}
      <div 
        className="absolute hidden rounded-full opacity-30 blur-3xl 
                   transition-all animate-float lg:block"
        style={{ 
          width: '300px', 
          height: '300px', 
          top: '0px', 
          left: '-50px', 
          backgroundColor: 'rgb(99 102 241 / 0.4)' 
        }}
      ></div>
      {/* --- END OF FIX --- */}
      
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
          Our Mission
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
          We believe everyone deserves a career they love. The path to finding it
          is often confusing and overwhelming. Our mission is to replace that
          confusion with <span className="font-bold text-gray-900 dark:text-white">clarity, confidence, and a personalized plan for success.</span>
        </p>
      </div>
    </div>
  );
}

// --- Section 2: Our Approach (How we do it) ---
const approachItems = [
  {
    icon: <Target size={32} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'AI-Powered Insights',
    description: 'We use intelligent, data-driven assessments (based on proven models like RIASEC) to analyze your unique personality, interests, and skills.',
  },
  {
    icon: <BookText size={32} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Personalized Roadmaps',
    description: 'A good recommendation is just the start. We provide step-by-step learning paths and resources to help you gain the skills you need.',
  },
  {
    icon: <Users size={32} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Expert Connections',
    description: 'Technology is powerful, but human guidance is essential. We connect you with expert counsellors and an AI assistant to answer your questions.',
  },
];

function ApproachSection() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Our Approach
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            We don't just show you a list of jobs. We provide a complete
            guidance system built on three core pillars.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {approachItems.map((item) => (
            <div key={item.title} className="flex flex-col rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-700">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 flex-grow text-base text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Section 3: Meet the Team ---
const teamMembers = [
  {
    name: 'Frontend Developers',
    role: 'Crafting the user experience you see and interact with every day.',
    icon: <Code size={32} className="text-white" />,
    imageUrl: 'https://placehold.co/400x400/1F2937/FFFFFF?text=FD',
  },
  {
    name: 'Backend Developers',
    role: 'Building the secure and scalable server logic that powers the app.',
    icon: <Database size={32} className="text-white" />,
    imageUrl: 'https://placehold.co/400x400/1F2937/FFFFFF?text=BD',
  },
  {
    name: 'Machine Learning Engineers',
    role: 'Designing the intelligent AI models that provide your recommendations.',
    icon: <BrainCircuit size={32} className="text-white" />,
    imageUrl: 'https://placehold.co/400x400/1F2937/FFFFFF?text=ML',
  },
];

function TeamSection() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Meet the Minds Behind SkillSync
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            We are a passionate team of developers and engineers dedicated
            to solving the challenge of career discovery.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((person) => (
            <div key={person.name} className="flex flex-col rounded-lg bg-gray-900 text-center shadow-lg dark:bg-gray-800">
              <img className="h-56 w-full flex-shrink-0 rounded-t-lg object-cover" src={person.imageUrl} alt="" />
              <div className="flex flex-1 flex-col p-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">
                  {person.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {person.name}
                </h3>
                <p className="mt-2 flex-grow text-base text-gray-300">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Main Page Component ---
function AboutPage() {
  return (
    <div className="w-full">
      {/* 1. Our Mission */}
      <MissionSection />

      {/* 2. Our Approach */}
      <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"><div className="h-px"></div></div>
      <ApproachSection />
      
      {/* 3. Meet the Team */}
      <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"><div className="h-px"></div></div>
      <TeamSection />

      {/* 4. Re-usable Call to Action */}
      <CtaSection />
    </div>
  );
}

export default AboutPage;