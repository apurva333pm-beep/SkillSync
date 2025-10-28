import React, { createContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // This effect runs when the 'theme' state changes
  useEffect(() => {
    const root = window.document.documentElement; // Gets the <html> tag
    
    // Remove the old class (if any)
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    
    // Add the new class
    root.classList.add(theme);
    
    // Save the user's choice in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Only re-run when theme changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;