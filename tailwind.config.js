/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0891b2',
        secondary: '#bae6fd',
        dark: '#111827',
        light: '#64748b',
        'secondary-dark': '#374151'
      }
    },
  },
  plugins: [],
}