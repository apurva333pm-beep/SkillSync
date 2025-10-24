import React from 'react';
import { useAuth } from '../hooks/useAuth';

function DashboardPage() {
  // Get the user from our auth hook
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Welcome to your Dashboard, {user?.name}</h1>
      <p>Your email: {user?.email}</p>
      <p>Your role: <strong>{user?.role}</strong></p>
      
      {/* Show different content based on role */}
      {user?.role === 'admin' && (
        <div className="admin-section">
          <h2>Admin Panel</h2>
          <p>You have admin privileges. You can manage users and careers here.</p>
          {/* You can add links to admin-only pages here */}
        </div>
      )}
      
      {user?.role === 'user' && (
        <div className="user-section">
          <h2>Your Career Journey</h2>
          <p>This is where your career recommendations and results will appear.</p>
          {/* This is where you'll add the "Career form" [cite: 31] logic */}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;