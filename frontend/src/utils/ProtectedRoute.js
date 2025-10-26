import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Show a styled loading message
  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Loading your session...
        </p>
      </div>
    );
  }

  // If authenticated, show the page. Otherwise, redirect to login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;