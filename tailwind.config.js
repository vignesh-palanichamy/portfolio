/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#121212',
        foreground: '#f5f5f5',
        card: {
          DEFAULT: '#1c1c1c',
          foreground: '#f5f5f5',
          hover: '#242424',
        },
        popover: {
          DEFAULT: '#292929',
          foreground: '#f5f5f5',
        },
        primary: {
          DEFAULT: '#1a40ff',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#262626',
          foreground: '#f5f5f5',
        },
        muted: {
          DEFAULT: '#202020',
          foreground: '#ababab',
        },
        accent: {
          DEFAULT: '#303030',
          foreground: '#f5f5f5',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        input: '#292929',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      animation: {
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
        'shimmer': 'shimmer 1.8s infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'superpowers-gradient':
          'radial-gradient(80.17% 109.2% at 44.373% 35.1526%, rgb(208, 178, 255) 0%, rgb(255, 238, 216) 42.83%, rgb(232, 64, 13) 88.38%)',
        'badge-gradient':
          'radial-gradient(80.17% 109.2% at 44.373% 35.1526%, rgb(208, 178, 255) 0%, rgb(255, 238, 216) 42.83%, rgb(232, 64, 13) 88.38%)',
      },
    },
  },
  plugins: [],
};
