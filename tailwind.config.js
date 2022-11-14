/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-blur-5px': 'inset 0px 0px 5px 1px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
};
