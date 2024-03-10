/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'raleway':['Raleway, sans-serif']
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
      }
    },
  },
  plugins: [],
}

