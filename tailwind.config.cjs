/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        whale: "url('./src/assets/whale.jpg')",
      },
    },
  },
  plugins: [],
};
