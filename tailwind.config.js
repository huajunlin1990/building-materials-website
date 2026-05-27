/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#166534',
        secondary: '#22c55e',
        accent: '#06b6d4',
        gold: '#f59e0b',
        dark: '#0f172a',
        light: '#f0fdf4',
        'light-gray': '#f8fafc',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 4px 20px rgba(22, 101, 52, 0.3)',
        'card': '0 8px 32px rgba(22, 101, 52, 0.15)',
      },
    },
  },
  plugins: [],
}
