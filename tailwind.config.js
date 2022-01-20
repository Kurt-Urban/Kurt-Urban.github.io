module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#728EA1",
        secondary: "#212E3F",
        "dark-accent": "#803411",
        "light-accent": "#BD8430",
      },
    },
    theme: {},
  },
  plugins: [],
};
