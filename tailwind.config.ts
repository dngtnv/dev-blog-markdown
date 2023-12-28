import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        lg: '992px',
      },
      backgroundImage: {
        'logo-pattern':
          'linear-gradient(234deg, #F4A446 28.74%, rgba(217, 52, 33, 0.55) 55.2%, rgba(167, 153, 31, 0.85) 87.76%)',
        'footer-pattern': "url('/footer-pattern.svg')",
      },
      colors: {
        navbar: 'hsl(var(--color-navbar) / <alpha-value>)',
        'nav-hover': 'hsl(var(--color-nav-hover) / <alpha-value>)',
        footer: 'hsl(var(--color-footer-bg) / <alpha-value>)',
        'theme-btn-bg': 'hsl(var(--color-themetoggle-bg) / <alpha-value>)',
        'theme-btn-fg': 'hsl(var(--color-themetoggle-fg) / <alpha-value>)',
        bd: 'hsl(var(--color-border) / <alpha-value>)',
        content: 'hsl(var(--color-fg) / <alpha-value>)',
        bkg: 'hsl(var(--color-bg) / <alpha-value>)',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        tertiary: 'hsl(var(--color-tertiary) / <alpha-value>)',
      },
      animation: {
        'slide-right': 'slide-right 0.2s ease forwards',
        'slide-left': 'slide-left 0.2s ease forwards',
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-61%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-61%)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
}
export default config
