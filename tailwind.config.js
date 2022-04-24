module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Karla']
    },
    extend: {
      colors: {
        primary: "#ffd32a",
        neutral: {
          900: "#080808",
          800: "#101010",
          700: "#181818",
          600: "#101010"
        },
        slate: {
          900: "#090e1a",
          800: "#0f172a",
          700: "#1e293b"
        }
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
