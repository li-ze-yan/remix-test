/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      backgroundPosition: {
        half: "50% 50%",
      },
    },
  },
  plugins: [],
};
