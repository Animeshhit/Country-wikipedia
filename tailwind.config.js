/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      darkmcolor: "hsl(207, 26%, 17%)",
      darkelmcolor: "hsl(209, 23%, 22%)",
      lighttextcolor: "hsl(200, 15%, 8%)",
      lightmodeinput: "hsl(0, 0%, 52%)",
      lightmodebg: "hsl(0, 0%, 98%)",
      lightelmcolor: "hsl(0, 0%, 100%)",
      darkmodelist: "rgba(255,255,255,0.5)",
      ligthDark:"rgba(0,0,0,0.7)",
    },
    extend: {},
  },
  plugins: [],
};
