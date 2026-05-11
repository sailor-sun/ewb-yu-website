/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ewbBlue: '#1d3359',
        ewbGold: '#c27b3a',
        yorkRed: '#bc1d24',
      },
    },
  },
  plugins: [],
}