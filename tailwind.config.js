/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "glass-dark": "hsla(0,0%,10%,0.7)",
        "glass-border": "hsla(0,0%,100%,0.08)",
      },
    },
  },
  plugins: [],
};
