module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Roboto", "serif"],
    },
    extend: {
      colors: {
        secondary: {
          600: "#0d9488",
        },
      },
    },
  },
  plugins: [],
};
