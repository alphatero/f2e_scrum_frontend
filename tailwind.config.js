/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-blur-5px': 'inset 0px 0px 5px 1px rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        bloop: {
          '0%, 100%': { borderRadius: '100%' },
          '10%': { borderRadius: '100% 70%' },
          '20%': { borderRadius: '91% 88% 75% 69%' },
          '30%': { borderRadius: '100% 100% 85%' },
          '40%': { borderRadius: '88% 100% 70%' },
          '50%': { borderRadius: '75% 100% 100%' },
          '60%': { borderRadius: '87% 78% 75% 84%' },
          '70%': { borderRadius: '79% 90% 80% 72%' },
          '80%': { borderRadius: '76% 92% 90% 77%' },
          '90%': { borderRadius: '83% 77% 99% 88%' },
        },
        floating: {
          '0% 100%': { transform: 'translateY(0%)' },
          '25%': { transform: 'translateY(1%)' },
          '50%': { transform: 'translateY(0%)' },
          '75%': { transform: 'translateY(-1%)' },
        },
        appearUp: {
          '0%': {
            transform: 'translateY(35px)',
          },
          '50%': {
            transform: 'translateY(15px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        bloop: 'bloop 12s linear infinite',
        floating: 'floating 4s linear infinite',
        appear: 'appearUp 5s linear',
      },
    },
  },
  plugins: [],
};
