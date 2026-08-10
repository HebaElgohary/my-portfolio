module.exports = {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },

        bg: "var(--color-bg)",

        surface: {
          DEFAULT: "var(--color-surface)",
          hover: "var(--color-surface-hover)",
        },

        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },

        border: "var(--color-border)",
     
      },
         boxShadow: {
      card: "var(--shadow-card)",
      elevated: "var(--shadow-elevated)",
      glow: "var(--shadow-glow)",
    },
    },
  },

  plugins: [],
};