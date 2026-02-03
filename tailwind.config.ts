import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E3525",
        "primary-light": "#858864",
        cream: "#F3F0EA",
        lavender: "#DCD6E5",
        "footer-bg": "#5F6137",
      },
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
