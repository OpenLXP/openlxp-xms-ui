module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: "#09a3ce",
        DEFAULT: "#0888aa",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
