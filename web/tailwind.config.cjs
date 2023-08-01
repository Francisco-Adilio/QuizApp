/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3-quiz': 'repeat(3, minmax(240px, 1fr))',
        'auto': 'repeat(auto-fit, minmax(400px, 1fr))'
      },
    },
  },
  plugins: [],
}
