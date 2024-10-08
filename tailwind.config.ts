import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        lg: '992px',
      },
      backgroundImage: {
        'logo-pattern':
          'conic-gradient(#F46BD0, #F66F71, #F4D06C, #AFF46C, #6EF790, #6CEDF6, #6E91F2, #B96AF2, #F46BD0), radial-gradient(#fff 50%, transparent calc(50% + 2px))',
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
        accent1: 'hsl(var(--color-accent1) / <alpha-value>)',
        accent2: 'hsl(var(--color-accent2) / <alpha-value>)',
        'codeblock-bg': 'hsl(var(--color-codeblock-bg) / <alpha-value>)',
        'code-fg': 'hsl(var(--color-code-fg) / <alpha-value>)',
      },
      animation: {
        'wheel-rotate': 'wheel-rotate 0.8s linear infinite',
        'slide-right': 'slide-right 0.2s ease forwards',
        'slide-left': 'slide-left 0.2s ease forwards',
      },
      keyframes: {
        'wheel-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
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
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('standalone-code', '&:not(:is(pre code))')
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        // '.scrollbar-thin': {
        //   scrollbarWidth: 'thin',
        //   scrollbarColor: 'rgb(31 28 27) #23273a',
        // },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            display: 'none',
          },
          '&::-webkit-scrollbar-button': {
            display: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--color-bg)',
            borderRadius: '20px',
            border: '2px solid #373847',
          },
        },
        '[data-theme="dark"]': {
          '.scrollbar-webkit': {
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'var(--color-fg)',
              border: '2px solid #adaaaa',
            },
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
  darkMode: ['class', '[data-theme="dark"]'],
}
export default config
