module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#09a3ce",
          DEFAULT: "#0888aa",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
