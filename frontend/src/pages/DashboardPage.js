import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

// --- UPDATED: Import all the icons we need for this page ---
import { 
  Sparkles, 
  ClipboardList, 
  MessageCircle, 
  Target,         // For Personalized Recommendations
  BookText,       // For Learning Roadmaps
  Users,          // For Expert Counselling
  CheckCircle     // For the progress checkmark
} from 'lucide-react';

function DashboardPage() {
  const { user } = useAuth();

  // This correctly uses the name first, then email part as fallback
  const username = user?.name || (user?.email ? user.email.split('@')[0] : 'User');

  return (
    // Main container for the whole page
    <div className="flex w-full flex-col items-center pt-8 text-center">
      
      {/* 1. Page Icon */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 dark:bg-gray-700">
        <Sparkles size={32} className="text-white" />
      </div>

      {/* 2. Welcome Message */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welcome back, {username}! 👋
      </h1>
      <p className="mt-2 max-w-xl text-lg text-gray-600 dark:text-gray-300">
        Ready to discover your perfect career path? Let's explore the
        opportunities that await you and build a roadmap to success.
      </p>

      {/* 3. Section Title */}
      <h2 className="mt-16 text-2xl font-semibold text-gray-900 dark:text-white">
        Choose Your Next Step
      </h2>

      {/* 4. Cards Grid (The first two cards) */}
      <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        
        {/* Card 1: Career Assessment */}
        <div className="relative flex flex-col rounded-lg bg-white p-6 text-left shadow-lg dark:bg-gray-800">
          <span className="absolute top-4 right-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Start Here
          </span>
          <div className="mb-4 flex items-center space-x-4">
            <div className="flex-shrink-0 rounded-full bg-blue-100 p-3 dark:bg-gray-700">
              <ClipboardList size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Career Assessment
            </h3>
          </div>
          <p className="flex-grow text-gray-600 dark:text-gray-300">
            Take our comprehensive assessment to discover careers
            that match your interests and skills.
          </p>
          <Link
            to="/intro-form"
            className="mt-6 block w-full rounded-md bg-white px-5 py-3 text-center font-medium text-gray-900 ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-600"
          >
            Get Started &rarr;
          </Link>
        </div>

        {/* Card 2: AI Career Assistant */}
        <div className="relative flex flex-col rounded-lg bg-white p-6 text-left shadow-lg dark:bg-gray-800">
          <span className="absolute top-4 right-4 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            AI Powered
          </span>
          <div className="mb-4 flex items-center space-x-4">
            <div className="flex-shrink-0 rounded-full bg-purple-100 p-3 dark:bg-gray-700">
              <MessageCircle size={24} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI Career Assistant
            </h3>
          </div>
          <p className="flex-grow text-gray-600 dark:text-gray-300">
            Chat with our AI assistant to get instant answers about
            careers and guidance.
          </p>
          <Link
            to="/ai-chat"
            className="mt-6 block w-full rounded-md bg-white px-5 py-3 text-center font-medium text-gray-900 ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-600"
          >
            Get Started &rarr;
          </Link>
        </div>

      </div>

      {/* --- NEW SECTION: "What You'll Discover" --- */}
      <h2 className="mt-20 text-2xl font-semibold text-gray-900 dark:text-white">
        What You'll Discover
      </h2>
      
      {/* Grid for the 3 new cards (black/white theme) */}
      <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        
        {/* Card 1: Personalized Recommendations */}
        <div className="flex flex-col rounded-lg bg-gray-900 p-8 text-left shadow-lg dark:bg-gray-800">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 dark:bg-gray-600">
            <Target size={24} className="text-white" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white dark:text-white">
            Personalized Recommendations
          </h3>
          <p className="flex-grow text-gray-300 dark:text-gray-400">
            Get career suggestions tailored specifically to your profile and preferences.
          </p>
        </div>

        {/* Card 2: Learning Roadmaps */}
        <div className="flex flex-col rounded-lg bg-gray-900 p-8 text-left shadow-lg dark:bg-gray-800">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 dark:bg-gray-600">
            <BookText size={24} className="text-white" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white dark:text-white">
            Learning Roadmaps
          </h3>
          <p className="flex-grow text-gray-300 dark:text-gray-400">
            Follow step-by-step guides to develop the skills needed for your chosen career.
          </p>
        </div>

        {/* Card 3: Expert Counselling */}
        <div className="flex flex-col rounded-lg bg-gray-900 p-8 text-left shadow-lg dark:bg-gray-800">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 dark:bg-gray-600">
            <Users size={24} className="text-white" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white dark:text-white">
            Expert Counselling
          </h3>
          <p className="flex-grow text-gray-300 dark:text-gray-400">
            Connect with industry professionals for personalized career guidance.
          </p>
        </div>
      </div>
      
      {/* --- NEW SECTION: "Your Journey Progress" --- */}
      <div className="mt-20 w-full max-w-5xl rounded-lg bg-white p-8 text-left shadow-lg dark:bg-gray-800">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Your Journey Progress
          </h3>
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
            Just Started
          </span>
        </div>
        
        {/* Progress List */}
        <ul className="mt-6 space-y-4">
          {/* Step 1: Account Created (Completed) */}
          <li className="flex items-center">
            <CheckCircle size={20} className="mr-3 flex-shrink-0 text-green-500" />
            <span className="font-medium text-gray-900 dark:text-white">
              Account created
            </span>
          </li>
          {/* Step 2: Complete Assessment (Pending) */}
          <li className="flex items-center">
            <div className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400 dark:border-gray-600"></div>
            <span className="text-gray-500 dark:text-gray-400">
              Complete career assessment
            </span>
          </li>
          {/* Step 3: Review Recommendations (Pending) */}
          <li className="flex items-center">
            <div className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400 dark:border-gray-600"></div>
            <span className="text-gray-500 dark:text-gray-400">
              Review personalized recommendations
            </span>
          </li>
          {/* Step 4: Connect with Counsellor (Pending) */}
          <li className="flex items-center">
            <div className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400 dark:border-gray-600"></div>
            <span className="text-gray-500 dark:text-gray-400">
              Connect with career counsellor
            </span>
          </li>
        </ul>
      </div>

      {/* --- NEW SECTION: "Ready to Transform" (CTA) --- */}
      <div className="mt-20 w-full max-w-5xl overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 p-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Transform Your Future?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
          Take the first step towards a fulfilling career. Our assessment takes just 10 minutes and provides insights that could shape your entire future.
        </p>
        <div className="mt-10">
          <Link
            to="/intro-form" // This links to the assessment
            className="rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Begin Career Journey &rarr;
          </Link>
        </div>
      </div>

    </div> // This is the final closing div
  );
}

export default DashboardPage;