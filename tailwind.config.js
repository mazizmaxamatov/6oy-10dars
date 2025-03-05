/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        navlogo: "url('/src/assets/svg/nav.icons.svg')",
        
      }
    },
  },
  plugins: [],
}

