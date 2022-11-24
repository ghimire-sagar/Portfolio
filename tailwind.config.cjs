/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff;",
        secondary: "#5050FF;",
        dimWhite: "#5A5E74;",
        dimback: "#FAFBFF;",
        darkblue: "#0808A7;",

        primarynight: "#02021F;",
        backgroundnight: "#010129;",
        secondarynight: "#5050FF;",
        dimWhitenight: "#8C8CAF;",
        dimbacknight: "#01011C;",
        darkbluenight: "#2E2EE8;",
        cardhover: "#000011;",
        businesscard: "rgba(255, 255, 255, 0.10);",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
]
};