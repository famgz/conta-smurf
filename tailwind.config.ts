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
      screens: {
        xs: '375px',
      },
      colors: {
        white: 'hsl(var(--white))',
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
        dark: 'linear-gradient(180deg, rgba(79, 79, 79, 0.37) 0%, rgba(0, 0, 0, 0.37) 100%)',
        red: 'linear-gradient(180deg, #CB0000 0%, #A80079 100%)',
        green: 'linear-gradient(180deg, #67FF4F 0%, #00B574 100%)',
        lime: 'linear-gradient(180deg, #00C620 0%, #97FF86 49.5%, #79FF76 100%)',
        yellow: 'linear-gradient(180deg, #FFB800 0%, #DA8300 100%)',
        folder:
          'linear-gradient(168.32deg, rgba(0, 0, 0, 0.3) 8.57%, rgba(20, 0, 62, 0.3) 115.05%)',
        menu: 'linear-gradient(180deg, rgba(33, 35, 45, 0.4) 0%, rgba(33, 35, 45, 0.4) 100%)',
        selected:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(227, 227, 227, 0.8) 100%)',
        'tab-header':
          'linear-gradient(95.63deg, rgba(79, 79, 79, 0.37) 45.52%, rgba(0, 0, 0, 0.37) 109.98%)',
        golden:
          'radial-gradient(circle at calc(50% - 100px) calc(50% + 50px), #9D7926, #FFE500)',
      },
      boxShadow: {
        golden: '0 5px 30px hsl(var(--golden))',
        blue: '0 0 10px 0px rgba(0,255,224,0.49)',
        lime: '0 0 10px 0px #67FF4F',
        yellow: '0 0 10px 0px #FFB800',
        bright: '0 0 10px 0px #F2f2f2',
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
