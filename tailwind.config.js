/** @type {import('tailwindcss').Config} */
module.exports = {
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
        // Custom Light Theme
        light: {
          primary: "#6366F1", // Indigo-500
          secondary: "#4921a3", // Violet-500
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          // Add other color definitions as needed
        },
      },
      {
        // Custom Dark Theme
        dark: {
          primary: "#6366F1",
          secondary: "#4921a3",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#1f2937",
          // Add other color definitions as needed
        },
      },
    ],
  },
};




