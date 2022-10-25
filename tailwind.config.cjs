/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",

      miniTablet: "700px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        navHide: {
          from: {
            height: "8rem",
            opacity: "1",
          },

          to: {
            height: 0,
          },
        },
        navDisplay: {
          from: {
            height: 0,
          },
          to: { height: "8rem" },
        },
        navDisplayAnimate: { from: { height: "10rem" }, to: { height: 0 } },
      },
      animation: {
        "nav-hide": "navHide .2s ease-in",
        "nav-display": "navDisplay .2s ease-in",
        "nav-display-hide": "navDisplayAnimate .2s ease-in",
      },
      gradientColorStops: {},
    },
  },
  plugins: [],
};
