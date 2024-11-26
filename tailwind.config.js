/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        // xs: '578px',
         // Add custom breakpoint
      }
    },
  },
  plugins: [],
}

