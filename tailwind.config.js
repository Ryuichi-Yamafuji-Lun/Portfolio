/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors & Text
        'background-main': '#030F33',
        'background-card-hover': '#061440',
        'line-white': '#EDEEFF',
      },

      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },

      backgroundImage: {
        'test-pattern': "url('./assets/image/temp.jpg')",
      },
    },
  },
  plugins: [],
}
