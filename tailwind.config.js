/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Softblue': 'hsl(215, 51%, 70%)',
        'CyanCl': 'hsl(178, 100%, 50%)',
        'DarkBlue': 'hsl(218, 44%, 22%)',
        'mainBG': 'hsl(217, 54%, 11%)',
        'cardBG': 'hsl(216, 50%, 16%)',
        'line': 'hsl(215, 32%, 27%)'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
