/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-emtech": "#1165F6",
        "turquoise-emtech": "#25C7D9",
        "purple-emtech": "#1165F6",
        "overseas-emtech": "#1165F6",
        "navy-emtech": "#1165F6",
        "secondary-text": "#C2C2C2",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
