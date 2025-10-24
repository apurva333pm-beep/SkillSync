import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  // Get auth state and logout function from our hook
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">SkillSync</Link>
      </div>
      <ul className="nav-links">
        {/* If user is logged in */}
        {isAuthenticated ? (
          /* FIX #1: This is the part from your screenshot.
            You must wrap all these list items in one parent Fragment.
          */
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">
                Welcome, {user?.name}
              </Link>
            </li>
            <li>
              <button onClick={logout} className="btn btn-logout">
                Logout
              </button>
            </li>
          </>
        ) : (
          /* FIX #2: This is the part you fixed in the last step.
            This Fragment is also required here.
          */
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;