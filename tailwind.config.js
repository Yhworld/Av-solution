/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightGreen: 'hsl(157, 49%, 49%)'
      },
    },
  },
  plugins: [],
}