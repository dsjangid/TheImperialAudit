/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        accent: "var(--accent)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Source Serif 4", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        "eye-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "candle-flicker": {
          "0%, 100%": { opacity: "0.85", transform: "translate(-50%, -50%) scale(1)" },
          "25%": { opacity: "1", transform: "translate(-50%, -50%) scale(1.1)" },
          "50%": { opacity: "0.65", transform: "translate(-50%, -50%) scale(0.92)" },
          "75%": { opacity: "0.95", transform: "translate(-50%, -50%) scale(1.05)" },
        },
        "page-ink-in": {
          "0%": { opacity: "0.4", clipPath: "inset(0 0 100%)" },
          "100%": { opacity: "1", clipPath: "inset(0 0 0%)" },
        },
        "page-folio-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.985)" },
        },
      },
      animation: {
        "eye-pulse": "eye-pulse 2.4s ease-in-out infinite",
        "candle-flicker": "candle-flicker 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
