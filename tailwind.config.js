/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
      function ({
        addBase,
        theme
      }) {
        addBase({
          ':root': {
            '--color-primary': theme('colors.primary'),
          },
        });},
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6366F1",
          secondary: "#4921a3",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          opposite: "#000000"
        },
      },
      {
        dark: {
          primary: "#6366F1",
          secondary: "#4921a3",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#1f2937",
          opposite: "#ffffff"
        },
      },
    ],
  },
};




