/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgrey: "#F5F5F5",
        darkgrey: "#7D8184",
        reddish: "#DB4444",
        golden: "#FFAD33",
        footercolor: "#fafafa",
      },
      fontFamily: {
        fot: ["Monofett, monospace"],
      },
    },
  },
  plugins: [],
};
