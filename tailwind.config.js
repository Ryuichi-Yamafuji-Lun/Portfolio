/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color schema for the website
        'background-main': '#030F33',
        'line-white': '#EDEEFF',
      },

      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },

      backgroundImage: {
        'test-pattern': "url('./assets/image/temp.jpg')",
      },
      screens: {
        sm: '640px',
        md: '1150px',  
        lg: '1280px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
}
