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
                "glitch-after": "glitch var(--after-duration) infinite linear alternate-reverse",
                "glitch-before": "glitch var(--before-duration) infinite linear alternate-reverse",
                'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
                'star-movement-top': 'star-movement-top linear infinite alternate',
                shine: 'shine 5s linear infinite',
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
                glitch: {
                    "0%": { "clip-path": "inset(20% 0 50% 0)" },
                    "5%": { "clip-path": "inset(10% 0 60% 0)" },
                    "10%": { "clip-path": "inset(15% 0 55% 0)" },
                    "15%": { "clip-path": "inset(25% 0 35% 0)" },
                    "20%": { "clip-path": "inset(30% 0 40% 0)" },
                    "25%": { "clip-path": "inset(40% 0 20% 0)" },
                    "30%": { "clip-path": "inset(10% 0 60% 0)" },
                    "35%": { "clip-path": "inset(15% 0 55% 0)" },
                    "40%": { "clip-path": "inset(25% 0 35% 0)" },
                    "45%": { "clip-path": "inset(30% 0 40% 0)" },
                    "50%": { "clip-path": "inset(20% 0 50% 0)" },
                    "55%": { "clip-path": "inset(10% 0 60% 0)" },
                    "60%": { "clip-path": "inset(15% 0 55% 0)" },
                    "65%": { "clip-path": "inset(25% 0 35% 0)" },
                    "70%": { "clip-path": "inset(30% 0 40% 0)" },
                    "75%": { "clip-path": "inset(40% 0 20% 0)" },
                    "80%": { "clip-path": "inset(20% 0 50% 0)" },
                    "85%": { "clip-path": "inset(10% 0 60% 0)" },
                    "90%": { "clip-path": "inset(15% 0 55% 0)" },
                    "95%": { "clip-path": "inset(25% 0 35% 0)" },
                    "100%": { "clip-path": "inset(30% 0 40% 0)" },
                },
                'star-movement-bottom': {
                    '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
                    '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
                },
                'star-movement-top': {
                    '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
                    '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
                },
                shine: {
                    '0%': { 'background-position': '100%' },
                    '100%': { 'background-position': '-100%' },
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