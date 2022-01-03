module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['DM Sans']
    },
    extend: {
      colors: {
        gray: {
          900: "#080808",
          800: "#101010",
          700: "#181818"
        },
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      borderColor: ['hover', 'group-hover']
    }
  }
}
