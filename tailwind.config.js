/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
      'primary-accent': 'hsl(var(--primary-accent) / <alpha-value>)',
      'secondary-accent': 'hsl(var(--secondary-accent) / <alpha-value>)',
      'secondary-foreground':
        'hsl(var(--secondary-foreground) / <alpha-value>)',
      primary: 'hsl(var(--primary) / <alpha-value>)',
      secondary: 'hsl(var(--secondary) / <alpha-value>)',
      'toggle-bg': 'hsl(var(--toggle-bg) / <alpha-value>)',
      'toggle-fg': 'hsl(var(--toggle-fg) / <alpha-value>)',
      'toggle-accent': 'hsl(var(--toggle-accent) / <alpha-value>)',
      error: 'hsl(var(--error) / <alpha-value>)',
      'error-foreground': 'hsl(var(--error-foreground) / <alpha-value>)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    fontSize: {
      sm: ['14px', '17px'],
      'base-b': ['15px', '24px'],
      base: ['16px', '24px'],
      md: ['18px', '24px'],
      lg: ['20px', '24px'],
      xl: ['24px', '29px'],
      '2xl': ['64px', '77px'],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    fontStyle: {
      normal: 'normal',
      italic: 'italic',
    },

    extend: {},
  },

  plugins: [],
};
