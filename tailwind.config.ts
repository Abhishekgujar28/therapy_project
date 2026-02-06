import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background layers
        bgMain: '#FBF8F6',     // warm pearl
        bgSection: '#F3EDE9',  // soft linen
        bgCard: '#FFFFFF',    // clean cards
        bgSoft: '#EFE4DF',    // blush fog
        bgAccent: '#F7E2DA',  // soft peach accent sections

        // Text
        textPrimary: '#2B2422', // warm charcoal
        textBody: '#4A3F3B',
        textMuted: '#8A7F7A',

        // Brand
        primary: '#8C5A6A',      // muted plum-rose (signature)
        primaryHover: '#744B58',
        primarySoft: '#E3C9D0',

        // Accent
        accent: '#D6A38B',       // soft terracotta-peach
        accentSoft: '#F1D8CD',

        // Buttons
        buttonPrimary: '#8C5A6A',
        buttonPrimaryHover: '#744B58',
        buttonSecondary: '#D6A38B',

        // Footer
        footerBg: '#2B2422',
        footerText: '#FBF8F6',
      }

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
