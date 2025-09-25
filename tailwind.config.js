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
      animation: {
        "slide-text-horizontal": "slide-horizontal 15s linear infinite",
      },
    },
  },
  plugins: [],
};
