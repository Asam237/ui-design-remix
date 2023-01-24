/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      banner: "url('../assets/pictures/ban.jpg')",
      trendingone: "url('../assets/pictures/t1.jpeg')",
      trendingtwo: "url('../assets/pictures/t2.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
