/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lexens: ["Lexend", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FFD700",
      },
    },
  },
  plugins: [],
};
