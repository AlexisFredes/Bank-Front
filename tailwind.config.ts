import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: '#343434',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: '#343434'
        },
        red: {
          900: '#730005',
          800: '#95090F',
          700: '#B7161C',
          600: '#D9272E',
          500: '#FB3C43',
          400: '#FF686E',
          300: '#FF9498',
          200: '#FFC0C2',
          100: '#FFEBEC',
          50: '#FFF8F8'
        },
        gray: {
          950: '#050505',
          900: '#343434',
          800: '#565656',
          700: '#707070',
          600: '#898989',
          500: '#A3A3A3',
          400: '#BCBCBC',
          300: '#D6D6D6',
          200: '#EFEFEF',
          100: '#FCFCFC'
        },
        green: {
          800: '#004C37',
          700: '#007555',
          500: '#00A074',
          300: '#8DD4C1',
          200: '#EFEFEF'
        },
        yellow: {
          800: '#6A570D',
          700: '#BB9D00',
          500: '#FFD600',
          300: '#FFEE99',
          200: '#FFFBE5'
        },
        white: '#FFFFFF',
        error: {
          ligth: '#FFA38D',
          dark: '#C80000'
        },
        warning: {
          ligth: '#FFCC80',
          dark: '#FF8E00'
        },
        info: {
          ligth: '#B3E5FC',
          dark: '#01579B'
        },
        success: {
          ligth: '#A5D6A7',
          dark: '#2E7D32'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: '#343434'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: '#343434'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: '#343434'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: '#343434'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: '#343434'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        '01': '0px 0px 11px 0px rgba(0, 0, 0, 0.09)',
        '02': '0px 3px 4px 0px rgba(0, 0, 0, 0.12)',
        '04': 'rgba(0, 0, 0, 0.3)',
        error: '0px 0px 7px 0px #FFF',
        success: '0px 0px 10px 0px #8DD4C1',
        none: 'none !important'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
