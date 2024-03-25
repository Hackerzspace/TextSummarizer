module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#302b63",
      primary: "#FFFFFF",
      active: "#C3B1E1",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
