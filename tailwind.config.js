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
          900: "#070b14",
          800: "#0e1526",
          700: "#1e293b",
          600: "#334155"
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
