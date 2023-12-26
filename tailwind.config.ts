import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-pattern':
          'linear-gradient(234deg, #F4A446 28.74%, rgba(217, 52, 33, 0.55) 55.2%, rgba(167, 153, 31, 0.85) 87.76%)',
        'footer-pattern': "url('/footer-pattern.svg')",
      },
      colors: {
        navbar: 'hsl(var(--color-navbar) / <alpha-value>)',
        'nav-hover': 'hsl(var(--color-nav-hover) / <alpha-value>)',
        themebtn: 'hsl(var(--color-themetogglebtn) / <alpha-value>)',
        bd: 'hsl(var(--color-border) / <alpha-value>)',
        content: 'hsl(var(--color-fg) / <alpha-value>)',
        bkg: 'hsl(var(--color-bg) / <alpha-value>)',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        tertiary: 'hsl(var(--color-tertiary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
