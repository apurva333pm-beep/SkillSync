/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode by adding a 'dark' class to the <html> tag
  darkMode: 'class', 
  
  // Tell Tailwind to scan all your components and pages
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // This plugin adds better default styling for forms
    require('@tailwindcss/forms'),
  ],
}