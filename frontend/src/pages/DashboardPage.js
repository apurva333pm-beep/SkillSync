import React from 'react';
import { useAuth } from '../hooks/useAuth';

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welcome, {user?.name}!
      </h1>
      
      <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
            <dd className="mt-1 text-lg text-gray-900 dark:text-gray-100">{user?.email}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</dt>
            <dd className="mt-1 text-lg font-semibold uppercase text-blue-600 dark:text-blue-400">{user?.role}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Education</dt>
            <dd className="mt-1 text-lg text-gray-900 dark:text-gray-100">{user?.education_level || 'Not set'}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Age</dt>
            <dd className="mt-1 text-lg text-gray-900 dark:text-gray-100">{user?.age || 'Not set'}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Interests</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {user?.interests && user.interests.length > 0 ? (
                user.interests.map((interest) => (
                  <span key={interest} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {interest}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 dark:text-gray-400">No interests set.</span>
              )}
            </dd>
          </div>
        </dl>
      </div>
      
      {/* This is where you can add role-specific content */}
      <div className="mt-8">
        {user?.role === 'admin' && (
          <div className="rounded-md bg-yellow-100 p-4 dark:bg-yellow-900">
            <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200">Admin Panel</h3>
            <p className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
              You have admin privileges. Add links to manage users or careers here.
            </p>
          </div>
        )}
        
        {user?.role === 'user' && (
          <div className="rounded-md bg-green-100 p-4 dark:bg-green-900">
            <h3 className="text-lg font-medium text-green-800 dark:text-green-200">Your Career Journey</h3>
            <p className="mt-2 text-sm text-green-700 dark:text-green-300">
              This is where your career recommendations will appear.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;