/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            prime: ['var(--font-prime)'],
            sec: ['var(--font-sec)'],
          },
      },
    },
    plugins: [],
  }