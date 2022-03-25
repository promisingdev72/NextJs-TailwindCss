module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'back-image':'url(/images/background.png)'
      }
    },
  },
  plugins: [],
}
