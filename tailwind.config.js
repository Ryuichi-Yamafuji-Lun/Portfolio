/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        'light-red': '#FFAAAA',
        'light-gold': '#FFFFAA',
        'light-blue': '#AAAAFF',

        // Dark Mode
        'dark-red': '#AA0000',
        'dark-gold': '#888800',
        'dark-blue': '#0000AA',

        // Background Colors
        'eggshell-white': '#F0EAD6',
      },

      fontFamily: {
        'caslon': ['"Adobe Caslon Pro"', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

