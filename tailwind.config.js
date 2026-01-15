/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-pink': '#FE4EEE',
        'primary-blue': '#2F81FF',
        secondary: '#FE4EEE',
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        overlock: ['Overlock', 'sans-serif'],
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '30': '7.5rem',
        '65': '65px',
      },
      borderWidth: {
        '3': '3px',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(40, 43, 48, 0.6) 100%)',
        'mobile-hero-gradient': 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)',
      },
      minHeight: {
        'screen-minus-nav': 'calc(100vh - 65px)',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}