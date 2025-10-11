/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Hot pink theme for both light and dark modes
        light: {
          primary: '#FF1493', // Hot Pink
          secondary: '#F5F5F5', // Light gray
          accent: '#FF69B4', // Pink
          text: '#212121', // Dark gray for text
          muted: '#757575', // Medium gray
          background: '#FFFFFF', // White background
        },
        dark: {
          primary: '#FF1493', // Same Hot Pink
          secondary: '#292929', // Dark gray
          accent: '#FF69B4', // Same Pink
          text: '#FFFFFF', // White text
          muted: '#AAAAAA', // Light gray
          background: '#121212', // Very dark background
        },
        // Animation color accents
        anime: {
          red: '#FF4081', // Bright Pink-Red
          blue: '#40C4FF', // Bright Blue
          green: '#69F0AE', // Bright Green
          purple: '#E040FB', // Bright Purple
          yellow: '#FFEA00', // Bright Yellow
          pink: '#FF80AB', // Light Pink
          cyan: '#18FFFF', // Bright Cyan
        }
      },
      fontFamily: {
        // Developer-style fonts
        mono: [
          'JetBrains Mono', 
          'Fira Code', 
          'Roboto Mono', 
          'Source Code Pro', 
          'monospace'
        ],
        // Title fonts
        title: [
          'Orbitron', // Futuristic font
          'Rajdhani', // High-tech feel
          'Exo 2', // Modern font
          'sans-serif'
        ],
        // Body fonts - Changing to title fonts for better matching with mono and display
        sans: [
          'Rajdhani',
          'Exo 2',
          'sans-serif'
        ],
        // Display fonts
        display: [
          'Bebas Neue',
          'Black Han Sans',
          'sans-serif'
        ],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.5s forwards',
        'slide-out': 'slideOut 0.5s forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 20, 147, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 20, 147, 0.1) 1px, transparent 1px)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}