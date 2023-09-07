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
        'light-gold': '#EDDDB8',
        'light-blue': '#AAAAFF',

        // Dark Mode
        'dark-red': '#AA0000',
        'dark-gold': '#888800',
        'dark-blue': '#0000AA',

        // Background Colors & Text
        'background-white': '#F2F2F2',
        'line-white': '#B0925A',
      },

      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

