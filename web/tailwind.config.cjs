/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(240px, 1fr))'
      },
      backgroundImage: {
        'vasco': "url('/src/public/EscudoVasco.png')"
      }
    },
  },
  plugins: [],
}
