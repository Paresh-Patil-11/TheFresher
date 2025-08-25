/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Dynamic classes used in Roadmap component
    'border-blue-200',
    'border-green-200',
    'border-purple-200',
    'border-amber-200',
    'bg-gradient-to-br',
    'from-blue-50',
    'from-green-50',
    'from-purple-50',
    'from-amber-50',
    'to-blue-100',
    'to-green-100',
    'to-purple-100',
    'to-amber-100',
    'text-blue-500',
    'text-green-500',
    'text-purple-500',
    'text-amber-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-amber-500',
    'hover:bg-blue-600',
    'hover:bg-green-600',
    'hover:bg-purple-600',
    'hover:bg-amber-600',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}