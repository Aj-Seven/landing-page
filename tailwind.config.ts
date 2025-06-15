/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#f4f222",
        foreground: "#333333",
        primary: "#0070f3",
        secondary: "#6373F1",
        destructive: "#FF5252",
        accent: "#FFC107",
        input: "#f9f9f9",

        // Dark mode colors
        darkBackground: "#1a1a1a",
        darkForeground: "#e0e0e0",
        darkPrimary: "#60a5fa",
        darkSecondary: "#818cf8",
        darkAccent: "#facc15",
        darkInput: "#2a2a2a",
      },
    },
  },
  plugins: [],
};
