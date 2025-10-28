import React, { useState } from 'react';
// We use NavLink for links that need an "active" state
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ThemeToggle from './ThemeToggle';
// Import icons
import { Menu, X, Bell } from 'lucide-react'; 

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Link Style Definitions ---
  
  // Style for the "active" app links (Dashboard, etc.)
  const appLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium border-b-2 ${
      isActive
        ? 'border-indigo-500 text-gray-900 dark:text-white' // Active
        : 'border-transparent text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700' // Inactive
    }`;

  // Style for the static "Home, About" links
  const staticLinkClass = "px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white";

  // Style for the primary "Sign Up" button
  const primaryBtn = "rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200";

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b border-gray-200 
                 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* 1. Logo (Left) */}
          <div className="flex-shrink-0">
            <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-500">
                SkillSync
              </span>
            </Link>
          </div>

          {/* 2. Main Links (Center) */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {isAuthenticated ? (
              // --- LOGGED-IN: Show App Links ---
              <>
                <NavLink to="/dashboard" className={appLinkClass}>Dashboard</NavLink>
                <NavLink to="/my-results" className={appLinkClass}>My Results</NavLink>
                <NavLink to="/counsellors" className={appLinkClass}>Counsellors</NavLink>
              </>
            ) : (
              // --- LOGGED-OUT: Show Public Links ---
              <>
                <NavLink to="/" className={appLinkClass}>Home</NavLink>
                {/* We use <Link> for static pages that don't need an "active" state */}
                <Link to="/about" className={staticLinkClass}>About</Link>
                <Link to="/contact" className={staticLinkClass}>Contact</Link>
              </>
            )}
          </div>

          {/* 3. Auth & Icons (Right) */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            {isAuthenticated ? (
              // --- LOGGED-IN: Show Static Links & Icons ---
              <>
                <Link to="/" className={staticLinkClass}>Home</Link>
                <Link to="/about" className={staticLinkClass}>About</Link>
                <Link to="/contact" className={staticLinkClass}>Contact</Link>
                
                {/* Vertical divider */}
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>

                <ThemeToggle />
                <button className="rounded-full p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                  <Bell size={20} />
                </button>
                <Link
                  to="/profile"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white ring-2 ring-gray-400 ring-offset-2 dark:bg-gray-700"
                  title="Profile & Settings"
                >
                  {user?.email[0].toUpperCase()}
                </Link>
              </>
            ) : (
              // --- LOGGED-OUT: Show Auth Buttons ---
              <>
                <ThemeToggle />
                <Link to="/login" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sign In
                </Link>
                <Link to="/signup" className={primaryBtn}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* 4. Mobile Menu Button (Hamburger) */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 dark:border-gray-700 md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {isAuthenticated ? (
              // --- Mobile Logged-in Links ---
              <>
                <NavLink to="/dashboard" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">Dashboard</NavLink>
                <NavLink to="/my-results" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">My Results</NavLink>
                <NavLink to="/counsellors" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">Counsellors</NavLink>
                <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
                <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">Home</NavLink>
                <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">About</Link>
                <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">Contact</Link>
              </>
            ) : (
              // --- Mobile Public Links ---
              <>
                <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">Home</NavLink>
                <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">About</Link>
                <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">Contact</Link>
              </>
            )}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 pb-3">
            {isAuthenticated ? (
              // --- Mobile Logged-in User Area ---
              <div className="space-y-2 px-2">
                <Link to="/profile" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">
                  View Profile ({user?.name || user?.email})
                </Link>
                <button onClick={logout} className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-red-600 dark:text-red-500">
                  Logout
                </button>
              </div>
            ) : (
              // --- Mobile Logged-out Buttons ---
              <div className="space-y-2 px-2">
                <Link to="/signup" className="block w-full rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white dark:bg-white dark:text-gray-900">Sign Up</Link>
                <Link to="/login" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">Sign In</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;