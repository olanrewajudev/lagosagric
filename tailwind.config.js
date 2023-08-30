/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fowl" : "url('/src/assets/images/lagosagro2.jpg')"
      },
      backgroundColor: {
        'ola' : 'red'
      }
    },
  },
  plugins: [],
}