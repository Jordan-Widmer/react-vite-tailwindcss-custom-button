/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'blue-gradient': 'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
        'black-gradient': 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
        'black-gradient-2': 'linear-gradient(-168.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
        'gray-gradient': 'linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101d 95.11%)',
        'discount-gradient': 'linear-gradient(125.17deg, #272727 0%, #11101d 100%)',
      },
      boxShadow: {
        'card': '0px 20px 100px -10px rgba(66, 71, 91, 0.1)',
      },
      keyframes: {
        'slide-top': {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-top': 'slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
