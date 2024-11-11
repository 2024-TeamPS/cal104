/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
      'primary': '#36B8FF',
      'primary-hover': '#56c3fd'
    },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      minWidth: {
        '120' : '120px'
      }
    },
  },
  plugins: [],
}
