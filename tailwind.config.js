/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors : {
        'primary' : '#FE6DB4',
        'secondary' : '#4FC497',
      },
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
        bubblegum: ['Bubblegum Sans', 'cursive'],
      }
    },
  },
  plugins: [],
}