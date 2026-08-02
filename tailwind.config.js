/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined navy palette — keeps the blue identity, easier on the eyes
        navy: {
          DEFAULT: '#0b1326', // page background
          light: '#111e40',   // card surface
          lighter: '#17274f', // hover surface
        },
        primary: {
          DEFAULT: '#5b8cff', // accent blue
          light: '#93b4ff',   // lighter accent for text/links
        },
        // Legacy aliases so any leftover references still resolve
        'background-main': '#0b1326',
        'line-white': '#e2e8f5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
