/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          dark: '#CC0000',
          light: '#FF9999', 
        },
        secondary: {
          DEFAULT: '#00FF00',
          dark: '#009900', 
          light: '#99FF99',
        },
      },
    },
  },
  plugins: [],
}

