/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'gray-darkest': 'hsl(var(--color-gray-darkest) / var(--tw-bg-opacity))',
      'gray-darker': 'hsl(var(--color-gray-darker) / var(--tw-bg-opacity))',
      'gray-dark': 'hsl(var(--color-gray-dark) / var(--tw-bg-opacity))',
      gray: 'hsl(var(--color-gray) / var(--tw-bg-opacity))',
      'gray-light': 'hsl(var(--color-gray-light) / var(--tw-bg-opacity))',
      'gray-lighter': 'hsl(var(--color-gray-lighter) / var(--tw-bg-opacity))',
      'gray-lightest': 'hsl(var(--color-gray-lightest) / var(--tw-bg-opacity))',
      white: 'hsl(var(--color-white) / var(--tw-bg-opacity))',
      purple: 'hsl(var(--color-purple) / var(--tw-bg-opacity))',
      red: 'hsl(var(--color-red) / var(--tw-bg-opacity))',
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
  },
  plugins: [require('@tailwindcss/forms')],
};
