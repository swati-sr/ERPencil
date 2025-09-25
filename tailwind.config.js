/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "#ABC4AA",
        "text-color": "#F3DEBA",
        "cursor-color": "#F3DEBA",
      },
      keyframes: {
        "blur-out-scale-down": {
          "0%": { filter: "blur(0px)", transform: "scale(1)", opacity: "1" },
          "100%": {
            filter: "blur(16px)",
            transform: "scale(0.8)",
            opacity: "0.5",
          },
        },
        "highlight-in-scale-up": {
          "0%": {
            filter: "blur(16px)",
            transform: "scale(0.8)",
            opacity: "0.5",
          },
          "100%": { filter: "blur(0px)", transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "slide-text-horizontal": "slide-horizontal 7s linear infinite",
        "blur-out-scale-down": "blur-out-scale-down 0.7s ease-out forwards",
        "highlight-in-scale-up": "highlight-in-scale-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
