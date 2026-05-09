import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          gold: "#9E7837",
          goldHighlight: "#B0914C",
          goldShadow: "#7A5C1E",
          white: "#FFFFFF",
          charcoal: "#2C2C2C",
          background: "#EBEBEB",
          surface: "#F4F4F4",
          border: "#D8D8D8",
          muted: "#9A9A9A",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "Arial", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(10, 10, 10, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
