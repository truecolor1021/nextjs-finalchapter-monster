import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        finalChapterGray: "#E5E5E5",
        finalChapterBlack: "#0C0C0C",
        finalChapterDarkGray: "#1B1B1B",
        finalChapterLightGray: "#757575",
        footerColor: "#1C1D20",
        footerFontColor: "#fdfdfdd1",
        // Add more custom colors here
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxHeight: {
        "712": "712px",
        "850": "850px",
        "46": "46px",
      },
      margin: {
        "15": "60px",
      },
      width: {
        "1800": "1800px",
        "545": "545px",
        "328": "328px",
        "650": "650px",
        "360": "360px",
      },
      minHeight: {
        "437": "437px",
      },
      transform: {
        center: "translate(0px, 50%)",
      },
      top: {
        "10": "10px",
      },
      border: {
        borderBottom: "2px solid white",
      },
      fontSize: {
        myFontsize: "16px",
        NavFontsize: "18px",
      },

      height: {
        "328": "328px",
        "800": "800px",
        "1080": "1080px",
        "700": "700px",
        "620": "620px",
      },
      maxWidth: {
        "545": "445px",
      },
      minWidth: {
        "437": "437px",
        "200": "173px",
      },
      backgroundColor: {
        "111111": "rgba(251, 253, 255, 0.05)",
        "222": "rgb(205 156 156 / 20%);",
        dark: "#111111",
        fbfdff: "#FBFDFF",
        search: "#1E1E1E",
      },
      textColor: {
        fbfdff: "#afafaf",
        d1d1d1: "#d1d1d1",
        111: "#111",
      },
      lineHeight: {
        heavy: "88px",
        myInlineheight: "22px",
      },
      gap: {
        9.5: "38px",
      },
      padding: {
        "3.5": "13px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
} satisfies Config;

export default config;
