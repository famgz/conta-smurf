import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        golden: {
          DEFAULT: 'hsl(var(--golden))',
        },
        brass: {
          DEFAULT: 'hsl(var(--brass))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to bottom, #004459 0%,  #000122 100%)',
        // 'linear-gradient(to bottom, #004459 0%, #01303A 50%, #000122 100%)',

        'header-gradient':
          'linear-gradient(to right, rgb(220,220,220,0.4), rgba(0,51,63,0.4) )',

        'line-gradient': 'radial-gradient( #BD00FF, rgba(250,0,255,0) )',
        effects: "url('/images/bg/effects.png')",
        light:
          'linear-gradient(180deg, rgba(235, 235, 235, 0.4) 0%, rgba(166, 166, 166, 0.4) 100%)',
        folder:
          'linear-gradient(168.32deg, rgba(0, 0, 0, 0.3) 8.57%, rgba(20, 0, 62, 0.3) 115.05%)',
      },
      boxShadow: {
        golden: '0 5px 30px hsl(var(--golden))',
      },
      textShadow: {
        xs: '0 0 4px var(--tw-shadow-color)',
        sm: '0 0 7px var(--tw-shadow-color)',
        DEFAULT: '0 0 15px var(--tw-shadow-color)',
        lg: '0 0 20px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
} satisfies Config;

export default config;
