import { DefaultColors } from 'tailwindcss/types/generated/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist:[
    'orange'
  ],
  theme: {
    extend: {
      colors:{
      },
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
        'Audiowide': ["Audiowide", 'sans-serif']
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

