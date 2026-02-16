import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#6B7456',
          light: '#8B9279',
          dark: '#545D44',
        },
        beige: {
          DEFAULT: '#E6DDD0',
          light: '#F0EBE3',
          dark: '#D9CCBA',
        },
        lavender: {
          DEFAULT: '#C5B8CC',
          light: '#D7C3DB',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Crimson Text', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config