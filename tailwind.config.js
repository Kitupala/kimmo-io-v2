/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-bp-xs": "400px",
        "custom-bp-sm": "570px",
        "cbp-header": "715px",
        "custom-bp-md": "820px",
      },

      fontFamily: {
        sans: '"Titillium Web", sans-serif',
        cursive: '"Cute Font", cursive',
      },

      fontSize: {
        xxs: "1rem",
        xs: "1.3rem",
        sm: "1.4rem",
        md: ["1.6rem", "1.4"],
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
        background: "hsl(var(--page-bg) / <alpha-value>)",
        "transparent-sm": "var(--transparent-sm)",
        "transparent-md": "var(--transparent-md)",
        "primary-text": "hsl(var(--primary-text) / <alpha-value>)",
        "gradient-text": "hsl(var(--gradient-text) / <alpha-value>)",
        "highlight-text": "hsl(var(--highlight-text) / <alpha-value>)",
        "muted-text": "hsl(var(--muted-text) / <alpha-value>)",
        "sidenav-border": "var(--sidenav-border)",
        "sidenav-bg": "var(--sidenav-bg)",
        "footer-link": "hsl(var(--footer-link) / <alpha-value>)",
        "footer-link-hover": "hsl(var(--footer-link-hover) / <alpha-value>)",
        grey: "#858699",
        "grey-dark": "#222326",
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

      transitionProperty: {
        "default-transition": "var(--default-transition)",
        "bg-color-transition": "var(--bg-color-transition)",
        "no-transition": "var(--no-transition)",
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",

        "mouse-gradient":
          "radial-gradient(600px at var(--x) var(--y), var(--mouse-gradient), transparent 60%);",

        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent);",

        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg);",
        "glow-lines":
          "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",

        "theme-light":
          "radial-gradient(at 72% 16%, rgb(204, 251, 241) 0, transparent 95%), radial-gradient(at 16% 43%, rgb(165, 243, 252) 0, transparent 54%), radial-gradient(at 64% 63%, rgb(224, 242, 254) 0, transparent 82%), radial-gradient(at 39% 11%, rgb(24, 24, 27) 0, transparent 0%), radial-gradient(at 57% 18%, rgb(99, 102, 241) 0, transparent 38%), radial-gradient(at 25% 61%, rgb(245, 245, 245) 0, transparent 40%), url('/images/noisefilter.svg')",
      },

      boxShadow: {
        primary: "rgba(80, 63, 205, 0.5) 0px 1px 40px",
        secondary: "rgba(80, 63, 205, 0.25) 2px 2px 20px",
      },

      dropShadow: {
        primary: "rgba(80, 63, 205, 0.5) 0px 1px 40px",
      },

      transitionDelay: {
        0: "0ms",
      },

      transitionTimingFunction: {
        nav: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        "bg-fade": {
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
          "100%": { opacity: "var(--hero-img-opacity)", transform: "scale(1)" },
        },

        "slide-in-right": {
          from: {
            opacity: 0,
            transform: "translateX(300px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },

        "slide-right": {
          "0%": {
            opacity: 0,
            width: "0%",
            "animation-timing-function": "cubic-bezier(0.49, 0.01, 0.16, 0.95)",
          },
          "100%": {
            opacity: 1,
            width: "var(--width)",
          },
        },

        blob: {
          "0%": {
            translate: "0 0",
            rotate: "0deg",
            opacity: "0",
          },
          "30%": {
            rotate: "20deg",
            opacity: "0.05",
          },
          "40%": {
            transform: "translate(750px, 350px) scale(1.5)",
            opacity: "0.3",
          },
          "65%": {
            rotate: "120deg",
            transform: "translate(250px, -150px) scale(0.8)",
            opacity: "0.35",
          },
          "100%": {
            rotate: "0deg",
            opacity: "0",
          },
        },
      },

      animation: {
        "fade-in": "fade-in 2000ms var(--animation-delay, 0ms) ease forwards",

        "bg-fade": "bg-fade 1000ms ease forwards",

        "fade-translate-in":
          "fade-translate-in 1000ms var(--animation-delay, 0ms) ease forwards",

        "fade-in-out": "fade-in-out 4000ms ease infinite",

        "zoom-in": "zoom-in 1400ms var(--animation-delay, 0ms) forwards",

        "slide-in-right":
          "slide-in-right 800ms var(--animation-delay, 0ms) ease forwards",

        "slide-right": "slide-right 600ms var(--animation-delay, 0ms) forwards",

        blob: "blob 35s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045)",

        "blob-reverse":
          "blob 25s infinite cubic-bezier(0.215, 0.61, 0.355, 1) reverse",
      },
    },
  },

  plugins: [],
};
