const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#28293D",
        bgSecondary: "#2D2F45",
        bgCard: "#373951",
        btnPrimary: "rgba(255, 255, 255, 0.1)",
        btnSecondary: "#3643FC",
        onSurface: "#50527A",
        gray: {
          "100": "#d9d9d9",
          "200": "#d5d5da",
          "300": "#50527a",
          "400": "#1262af",
          "500": "#3e405b",
          "600": "#424242",
          "700": "#373951",
          "800": "#2d2f45",
          "900": "#28293d",
          "1000": "rgba(0, 0, 0, 0.6)",
          "1100": "rgba(255, 255, 255, 0.2)",
          "1200": "rgba(255, 255, 255, 0.6)",
          "1300": "rgba(255, 255, 255, 0.1)",
          "1400": "rgba(0, 0, 0, 0.1)",
          "1500": "rgba(255, 255, 255, 0.8)",
        },
        white: { "100": "#ffffff", "200": "#fff" },
      },
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
