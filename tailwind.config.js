/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fowl" : "url('/src/assets/images/lagosagro8.jpg')"
      },
      backgroundColor: {
        'ola' : 'red'
      }
    },
  },
  plugins: [],
}