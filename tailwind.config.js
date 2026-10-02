/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#07080B',
          darker: '#040507',
          card: '#0D1017',
          cardHover: '#131824',
          border: 'rgba(0, 240, 255, 0.15)',
          borderHover: 'rgba(0, 240, 255, 0.4)',
          cyan: '#00F0FF',
          blue: '#00A3FF',
          green: '#00FF9D',
          emerald: '#10E7A0',
          yellow: '#FFB800',
          orange: '#FF5500',
          purple: '#A855F7',
          pink: '#FF0055',
          muted: '#8E9BAE',
          text: '#E2E8F0',
          subtext: '#94A3B8'
        }
      },
      fontFamily: {
        rajdhani: ['"Rajdhani"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Share Tech Mono"', 'monospace']
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.35), 0 0 30px rgba(0, 240, 255, 0.15)',
        'neon-green': '0 0 15px rgba(0, 255, 157, 0.35), 0 0 30px rgba(0, 255, 157, 0.15)',
        'neon-yellow': '0 0 15px rgba(255, 184, 0, 0.35), 0 0 30px rgba(255, 184, 0, 0.15)',
        'neon-pink': '0 0 15px rgba(255, 0, 85, 0.35), 0 0 30px rgba(255, 0, 85, 0.15)',
        'hud-card': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05), 0 10px 25px -5px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'grid-float': 'gridFloat 20s linear infinite',
        'reticle-spin': 'spin 12s linear infinite',
        'hud-blink': 'hudBlink 2s steps(2, start) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(0,240,255,0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 16px rgba(0,240,255,0.8))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        gridFloat: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' }
        },
        hudBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' }
        }
      }
    },
  },
  plugins: [],
};
