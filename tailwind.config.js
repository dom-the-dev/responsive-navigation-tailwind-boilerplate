const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      brand: "#45C2B7",
      dark: "#164E63",
      mid: "#BEC9DF",
      light: "#FFFFFF",
      black: colors.black,
      white: colors.white
    },
    extend: {},
  },
  plugins: [],
}
