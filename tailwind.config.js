/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        proxima: ['"Proxima Nova"', 'sans-serif'],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

