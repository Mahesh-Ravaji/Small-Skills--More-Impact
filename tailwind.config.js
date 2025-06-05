/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f3e8ff',
          100: '#e5ccff',
          200: '#d4a9ff',
          300: '#c485ff',
          400: '#b15eff',
          500: '#9333ea', // Primary purple
          600: '#7c28d1',
          700: '#6520ad',
          800: '#4e1a89',
          900: '#3b1466',
        },
        secondary: {
          50: '#fce7f3',
          100: '#fbcfe8',
          200: '#f9a8d4',
          300: '#f472b6',
          400: '#ec4899', // Neon pink
          500: '#db2777',
          600: '#be185d',
          700: '#9d174d',
          800: '#831843',
          900: '#500724',
        },
        accent: {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9', // Soft blue
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};