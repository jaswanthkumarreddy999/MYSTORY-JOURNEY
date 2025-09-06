/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { width: '0' },
          '100%': { width: '6rem' }, // same as w-24
        },
      },
      animation: {
        grow: 'grow 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
