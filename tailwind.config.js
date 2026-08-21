/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./blog/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        navy: { 900: "#020c12", 800: "#051d29", 700: "#0d2b3a" },
        teal: { 400: "#2dd4bf", 500: "#14b8a6", accent: "#00f0ff" }
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(20,184,166,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,.03) 1px,transparent 1px)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "marquee-fast": "marquee 15s linear infinite"
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-20px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } }
      }
    }
  },
  plugins: []
};
