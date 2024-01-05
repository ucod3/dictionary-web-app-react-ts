/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      textColor: {
        'gray-dark': 'hsl(var(--color-gray-dark) / <alpha-value>)',
      },
      'gray-darkest': 'hsl(var(--color-gray-darkest) / <alpha-value>)',
      'gray-darker': 'hsl(var(--color-gray-darker) / <alpha-value>)',
      gray: 'hsl(var(--color-gray) / <alpha-value>)',
      'gray-light': 'hsl(var(--color-gray-light) / <alpha-value>)',
      'gray-lighter': 'hsl(var(--color-gray-lighter) / <alpha-value>)',
      'gray-lightest': 'hsl(var(--color-gray-lightest) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)',
      purple: 'hsl(var(--color-purple) / <alpha-value>)',
      red: 'hsl(var(--color-red) / <alpha-value>)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    fontSize: {
      'heading-l': ['64px', '77px'],
      'heading-m': ['24px', '29px'],
      'heading-s': ['20px', '24px'],
      'body-m': ['18px', '24px'],
      'body-s': ['14px', '17px'],
    },
    extend: {},
  },

  plugins: [require('@tailwindcss/forms')],
};
