/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'raleway':['Raleway, sans-serif'],
      'nunito':['Nunito, sans-serif']
    },
    extend: {
      colors:{
        'high-emphasis': 'rgba(255, 255, 255, 0.87)',
        'primary-elevation-1' :'#1A1A1A',
        'medium-emphasis': 'rgba(255, 255, 255, 0.6)',
        'secondary':'rgba(75, 81, 121, 1)',
        'accent-red':'#E03616',
        'accent-blue':'#B5FFE1'
      },
      translate:{
          '4/5': '50%'
      },
      flexBasis: {
        '12/25': '48%',
      },
      backgroundImage: {
        'hero-image': "url('./src/assets/rover.jpg')",
      }
    },
    screens: {
      'xs': '400px',
      // => @media (min-width: 640px) { ... }

    },
  },
  plugins: [],
})

