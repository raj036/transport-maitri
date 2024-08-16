/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#39475b",
          "200": "#242c38",
        },
        "system-background-dark-base-primary": "#000",
        white: "#fff",
        cornflowerblue: "#00a3ff",
        gray: "rgba(255, 255, 255, 0.5)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "callout-bold": "'SF Pro Text'",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        mini: "15px",
        "50xl": "69px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "3xs": "10px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq78: {
        raw: "screen and (max-width: 78px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
