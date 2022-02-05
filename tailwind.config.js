const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/packages/**/*.{js,ts,jsx,tsx}",
    "./src/.stories/**/*.{js,ts,jsx,tsx}",
  ],

  //safelist for storybook comment it for production
  safelist: [
    {
      pattern: /(from|via|to|border|bg|text)-([a-z]*)-(\d{1}0{1,2})/,
    },
  ],

  //darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        luckiestGuy: ["Luckiest Guy"],
        oswald: ["Oswald", ...defaultTheme.fontFamily.sans],
      },
      animation: { rotateBox: "rotateBox 15s linear infinite" },
      keyframes: {
        rotateBox: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
