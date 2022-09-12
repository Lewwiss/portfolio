module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Work Sans']
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
          900: "#080808", //070b14
          800: "#101010", //0e1526
          700: "#181818", //1e293b
          600: "#101010", //334155
          500: "#404040",
          400: "#a3a3a3"
        }
      },
      fontSize: {
        "sm": ".82rem"
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