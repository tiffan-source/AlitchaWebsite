/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem'
    },
    colors : {
      white: colors.white,
      black : colors.black,
      primary: '#EF7B20',
      secondary : '#04162F',
      gray : colors.gray,
      yellow : colors.yellow,
      red : colors.red
    }
  },
  plugins: [],
}

