/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f9',
          100: '#d9f0f0',
          200: '#b8e3e3',
          300: '#8fd4d4',
          400: '#7fb5b5',
          500: '#6ba5a5',
          600: '#5a8e8e',
          700: '#4a7373',
          800: '#3d5e5e',
          900: '#334d4d',
        },
        secondary: {
          50: '#fdf6f6',
          100: '#fae8e8',
          200: '#f5d5d5',
          300: '#edb8b8',
          400: '#e39595',
          500: '#d4a5a5',
          600: '#c08585',
          700: '#a86b6b',
          800: '#8c5858',
          900: '#744a4a',
        },
        accent: {
          50: '#f9fcfb',
          100: '#e8f5f0',
          200: '#d4ebe3',
          300: '#b8dfd0',
          400: '#9dd3bd',
          500: '#82c7aa',
          600: '#6aaf92',
          700: '#55927a',
          800: '#457662',
          900: '#386051',
        },
        beige: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f5efe7',
          300: '#ede4d5',
          400: '#e3d7c0',
          500: '#d4c5a8',
          600: '#bfad8e',
          700: '#a69176',
          800: '#897760',
          900: '#70614e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

