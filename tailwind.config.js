/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#007EBD",

          "secondary": "#1BA54E",

          "accent": "#843D98",

          "neutral": "#1F2937",

          "base-100": "#E6E6E6",

          "info": "#5C629E",

          "success": "#51A800",

          "warning": "#E9E92F",

          "error": "#EA5234",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
