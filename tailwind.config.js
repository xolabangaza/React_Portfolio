const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "to": { maskPosition: "50% 50%, 0 50%" }
        }
      },
      animation: {
        flicker: "flicker 20s infinite linear"
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(from 180deg at 50% 70%, white 0deg, #eec32d 72deg, #ec4b4b 144deg, #709ab9 216deg, #4dffbf 288deg, white 360deg)"
      }
    }
  },
  plugins: [],
};
