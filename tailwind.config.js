module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      // 'sans': ['Work Sans']
      'sans': ['Bricolage Grotesque', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0EA5E9',
      },
    }
  },
  plugins: [],
  variants: {
    extend: {
      borderColor: ['hover', 'group-hover']
    }
  }
}