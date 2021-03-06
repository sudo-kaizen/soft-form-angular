require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  purge: {
      enabled: enablePurge,
      content: [
        './src/**/*.html',
        './src/**/*.scss'
      ],
    },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        phone: { max: '425px' },
      },
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};