/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // --- THIS IS THE NEW, CORRECT CODE ---
      animation: {
        // This creates a new utility class called "animate-float"
        // It tells Tailwind to use the "float" keyframes,
        // run for 6 seconds, and repeat forever.
        'float': 'float 6s ease-in-out infinite', 
      },
      keyframes: {
        // This defines the actual "float" animation
        'float': {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        }
      }
      // --- END OF NEW CODE ---
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}