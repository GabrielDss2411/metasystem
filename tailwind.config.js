/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eef4ff',
          100: '#d9e7ff',
          200: '#bcd4ff',
          300: '#8eb7ff',
          400: '#5c8eff',
          500: '#3a66ff',
          600: '#001725',
          700: '#1330e4',
          800: '#1629b8',
          900: '#182991',
        },
        orange:{
          600:'#ff6300',
        }, 

        purple: {
          50: '#f7f3ff',
          100: '#eee6ff',
          200: '#ded1ff',
          300: '#c7afff',
          400: '#aa7fff',
          500: '#8c4dff',
          600: '#7a29ff',
          700: '#6b18ee',
          800: '#5916c4',
          900: '#47169f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};