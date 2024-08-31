/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue-1': '#b2e4f7',
      'blue-dark': '#02bbea',
      'blue-light': '#ebfafe',
      'red-light': '#f6bbc4',
      'red-dark': '#e02a46',
      'green-light': '#c0edda',
      'green-dark': '#3bc88f',
    },
    fontFamily: {
      Montserrat: ['Montserrat'],
      Roboto: ['Roboto'],
    },
  },
  plugins: [],
}