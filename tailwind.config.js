/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // Custom Light Theme
        light: {
          primary: "#6366F1", // Indigo-500
          secondary: "#8B5CF6", // Violet-500
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
          secondary: "#8B5CF6",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#1f2937",
          // Add other color definitions as needed
        },
      },
    ],
  },
};




