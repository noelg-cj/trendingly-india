/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        canicule: ["Canicule"],
        sherman: ["Sherman"],
      },

      colors: {
        primary: "#0ab55f",
        secondary: "#06b19e",
        accent: "#38b2ac",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        // Add more custom font sizes here
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
        // Add more custom font weights here
      },
      // Add more custom styles here
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke-width": "1px",
          "-webkit-text-stroke-color": "#000",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
