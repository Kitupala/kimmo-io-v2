/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Titillium Web", sans-serif',
      },

      fontSize: {
        xxs: "1rem",
        xs: "1.3rem",
        sm: "1.4rem",
        md: "1.6rem",
        lg: "1.8rem",
        xl: ["2.2rem", "1.3"],
        "2xl": "2.4rem",
        "3xl": "2.6rem",
        "4xl": "3.2rem",
        "5xl": "4rem",
        "6xl": ["4.4rem", "1.2"],
        "7xl": ["4.8rem", "1.2"],
        "8xl": ["8rem", "1.2"],
      },

      colors: {
        transparent: "transparent",
        background: "#000212",
        white: "#fff",
        "off-white": "#f7f8f8",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
        grey: "#858699",
        "grey-dark": "#222326",
        "primary-text": "#b4bcd0",
      },

      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        13: "5.2rem",
        "navigation-height": "var(--navigation-height)",
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",

        "secondary-gradient":
          "radial-gradient(circle, rgba(0,78,146,1) 3%, rgba(0,4,40,1) 100%)",

        "mouse-gradient":
          "radial-gradient(600px at var(--x) var(--y), rgba(29, 78, 216, 0.15), transparent 60%);", //HOX

        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent);",

        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1), transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15), transparent 90%);",

        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg);",
        "glow-lines":
          "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
      },

      boxShadow: {
        primary: "rgba(80, 63, 205, 0.5) 0px 1px 40px",
      },

      transitionDelay: {
        0: "0ms",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        "fade-translate-in": {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "none" },
        },

        "fade-in-out": {
          "0%": { opacity: 0 },
          "30%": { opacity: 1, transform: "rotate(0deg)" },
          "60%": {
            transform: "rotate(360deg)",
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
          },
          "70%": { opacity: 1, transform: "rotate(360deg)" },
          "100%": { opacity: 0, transform: "rotate(360deg)" },
        },

        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale(0.6)",
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
          },
          "20%": {
            opacity: 1,
            transform: "scale(1.2)",
            "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },
          "100%": { opacity: 0.7, transform: "scale(1)" },
        },
      },

      animation: {
        "fade-in": "fade-in 2000ms var(--animation-delay, 0ms) ease forwards",

        "fade-translate-in":
          "fade-translate-in 1000ms var(--animation-delay, 0ms) ease forwards",

        "fade-in-out": "fade-in-out 4000ms ease infinite",

        "zoom-in": "zoom-in 1400ms var(--animation-delay, 0ms) forwards",
      },
    },
  },
  plugins: [],
};
