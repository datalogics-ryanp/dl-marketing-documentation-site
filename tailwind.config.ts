import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: 'selector',
  safelist: ['dark'],
  prefix: '',
  content: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'border': '#063573',
        'input': 'hsl(var(--input))',
        'ring': '#0C70F2',
        'background': '#051026',
        'foreground': 'hsl(var(--foreground))',
        'secondary': {
          DEFAULT: '#0C70F2',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'muted': {
          DEFAULT: '#021733',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'popover': {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'card': {
          DEFAULT: '#021733',
          foreground: 'hsl(var(--card-foreground))',
        },
        'green': {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16',
        },
        'midnight': {
          50: '#ecf8ff',
          100: '#d5edff',
          200: '#b4e2ff',
          300: '#81d1ff',
          400: '#45b5ff',
          500: '#1b92ff',
          600: '#0370ff',
          700: '#0059f8',
          800: '#0547c8',
          900: '#0b409d',
          950: '#051026',
        },
        'primary': '#0C70F2',
        'primary-focus': '#063573',
        'secondary': '#F224AC',
        'accent': '#F2A20C',
        'grey': '#636363',
        'neutral': '#063573',
        'base-100': '#051026',
        'base-content': '#021733',
        'info': '#FFFFFF',
        'success': '#36D399',
        'warning': '#F2D424',
        'error': '#F23924',
        'primary-text-content': '#636363',
        'primary-focus': '#063573',
        'base-content': '#021733',
        'primary-content': '#A8CDFB',
      },

      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },

  plugins: [animate],
} satisfies Config;
