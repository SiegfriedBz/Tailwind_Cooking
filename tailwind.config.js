/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myPrimary: "#FF6363"
      },
      fontFamily: {
        myFont: ['Nunito']
      }
  },
  plugins: [],
}
}
