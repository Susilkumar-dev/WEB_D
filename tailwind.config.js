/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#0F172A',
        },
        dark: {
          bg: '#020617',
          card: '#0F172A',
          text: {
            main: '#E5E7EB',
            secondary: '#9CA3AF',
            muted: '#6B7280'
          }
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        '3d-rotate': 'rotate3d 10s infinite linear',
        'roadmap-progress': 'roadmapProgress 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotate3d: {
          '0%': { transform: 'rotate3d(1, 1, 0, 0deg)' },
          '25%': { transform: 'rotate3d(1, 1, 0, 90deg)' },
          '50%': { transform: 'rotate3d(1, 1, 0, 180deg)' },
          '75%': { transform: 'rotate3d(1, 1, 0, 270deg)' },
          '100%': { transform: 'rotate3d(1, 1, 0, 360deg)' },
        },
        roadmapProgress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress)' },
        },
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-20': 'rotateY(20deg)',
        'y-40': 'rotateY(40deg)',
        'x-20': 'rotateX(20deg)',
      }
    },
  },
  plugins: [],
}