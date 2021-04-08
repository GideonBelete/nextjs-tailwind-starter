module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FFFFFF",
          icon: "#3671E9",
          button: "#3671E9",
          white10: "#FFFFFF1A"
        }
      },
      height: {
        xl: '60vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
