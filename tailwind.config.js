/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'high-emphasis': 'rgba(255, 255, 255, 0.87)',
        'primary-elevation-1' :'rgba(41, 41, 41, 1)',
        'medium-emphasis': 'rgba(255, 255, 255, 0.6)',
        'secondary':'rgba(75, 81, 121, 1)',
      },
    },
  },
  plugins: [],
}

