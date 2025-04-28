/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#E0FF82',
        black_remote: '#1F2223',
      },
    },
  },
  plugins: [],
};