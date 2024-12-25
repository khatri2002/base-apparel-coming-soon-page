/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",

        // Neutral
        "dark-grayish-red": "hsl(0, 6%, 24%)",
      },
      backgroundImage: {
        background:
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "gradient-btn":
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        "gradient-btn-hover":
          "linear-gradient(135deg, hsl(0, 80%, 95%), hsl(0, 74%, 83%))",
      },
    },
  },
  plugins: [],
};
