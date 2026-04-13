import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#fff0f0",
          100: "#ffd6d6",
          200: "#ffb0b0",
          300: "#ff8585",
          400: "#ff5e5e",
          500: "#CC0000",
          600: "#AA0000",
          700: "#850000",
          800: "#5c0000",
          900: "#3d0000",
        },
        canvas: "#090909",
        ink: "#f6f3ef",
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at top, rgba(204,0,0,0.35), transparent 42%), radial-gradient(circle at 80% 20%, rgba(255,68,68,0.22), transparent 24%)",
        "brand-gradient":
          "linear-gradient(120deg, #CC0000 0%, #FF4444 45%, #FF9999 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(204, 0, 0, 0.25)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Bebas Neue", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        accent: ["var(--font-accent)", "Rajdhani", "sans-serif"],
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -20px, 0)" },
        },
        glow: {
          from: { boxShadow: "0 0 18px rgba(204,0,0,0.4)" },
          to: { boxShadow: "0 0 42px rgba(204,0,0,0.6)" },
        },
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 4s ease infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
