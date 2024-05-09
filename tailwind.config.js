/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        steelblue: "#0c456b",
        gray: {
          "100": "#fafafa",
          "200": "rgba(124, 124, 124, 0.25)",
        },
        gainsboro: "#e0e0e0",
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "source-serif-pro": "'Source Serif Pro'",
        inter: "Inter",
      },
    },
    fontSize: {
      "sm-6": "13.6px",
      base: "16px",
      "mini-5": "14.5px",
      "7xl-9": "26.9px",
      "3xl": "22px",
      "sm-9": "13.9px",
      "mini-1": "14.1px",
      "base-4": "15.4px",
      "base-5": "15.5px",
      "mini-9": "14.9px",
      mini: "15px",
      "base-8": "15.8px",
      "base-1": "15.1px",
      "base-6": "15.6px",
      "base-3": "15.3px",
      "sm-7": "13.7px",
      "38xl": "57px",
      "27xl": "46px",
      "15xl": "34px",
      inherit: "inherit",
    },
    screens: {
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
