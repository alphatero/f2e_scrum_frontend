/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#14B8A6',
      },
      boxShadow: {
        'inner-blur-5px': 'inset 0px 0px 5px 1px rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        floating: {
          '0% 100%': { transform: 'translateY(0%)' },
          '25%': { transform: 'translateY(1%)' },
          '50%': { transform: 'translateY(0%)' },
          '75%': { transform: 'translateY(-1%)' },
        },
      },
      animation: {
        'floating-a': 'floating 4s linear infinite',
        'floating-b': 'floating 4s ease-in infinite reverse',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
};
