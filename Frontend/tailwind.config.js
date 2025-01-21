/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue':'#2e3440',
        'gray':'#7c8594'
      }
    },
  },
  plugins: [],
}