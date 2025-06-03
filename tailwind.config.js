/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a5f7a',
          50: '#f0f7fa',
          100: '#dcedf4',
          200: '#b9dce9',
          300: '#87c3d8',
          400: '#4da4c3',
          500: '#2e8aad',
          600: '#1a5f7a',
          700: '#164d63',
          800: '#164254',
          900: '#153848',
          950: '#0d2530',
        },
        secondary: {
          DEFAULT: '#20a3a3',
          50: '#f0fcfc',
          100: '#dbf7f7',
          200: '#bbeeed',
          300: '#8ae0e0',
          400: '#4dcbcb',
          500: '#20a3a3',
          600: '#1a8989',
          700: '#1b6e6e',
          800: '#1b5a5a',
          900: '#1a4b4b',
          950: '#0a2d2d',
        },
        accent: {
          DEFAULT: '#e6b31e',
          50: '#fdfaec',
          100: '#fbf5d9',
          200: '#f6e8a7',
          300: '#f0d570',
          400: '#e6b31e',
          500: '#d49b17',
          600: '#b17712',
          700: '#905813',
          800: '#764715',
          900: '#633c17',
          950: '#382009',
        },
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};