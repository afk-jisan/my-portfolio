/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // scan index.html too
    theme: {
      extend: {
        colors: {
          brand: {
            light: '#3dbfff',
            DEFAULT: '#1fb6ff',
            dark: '#009eeb',
          },
        },
      },
    },
    plugins: [],
  };
  