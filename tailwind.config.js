/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors & Text
        'background-white': '#F2F2F2',
        'line-white': '#B0925A',
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
