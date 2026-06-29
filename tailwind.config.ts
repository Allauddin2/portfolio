import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        primary: {
          DEFAULT: '#7C3AED',
          50: '#f3eeff',
          100: '#e9ddff',
          200: '#d5bdff',
          300: '#b990ff',
          400: '#9b5cff',
          500: '#7C3AED',
          600: '#6b22d9',
          700: '#5a18b8',
          800: '#4a1596',
          900: '#3c1278',
        },
        secondary: '#00E5FF',
        accent: '#FF4D8D',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'tilt': 'tilt 10s infinite linear',
        'border-spin': 'border-spin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        'border-spin': {
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #050816 0%, #1a0533 50%, #050816 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(0,229,255,0.05) 100%)',
        'neon-gradient': 'linear-gradient(90deg, #7C3AED, #00E5FF, #FF4D8D, #7C3AED)',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(124, 58, 237, 0.5), 0 0 60px rgba(124, 58, 237, 0.2)',
        'neon-cyan': '0 0 20px rgba(0, 229, 255, 0.5), 0 0 60px rgba(0, 229, 255, 0.2)',
        'neon-pink': '0 0 20px rgba(255, 77, 141, 0.5), 0 0 60px rgba(255, 77, 141, 0.2)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
}

export default config
