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
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
       }
    },
  },
  plugins: [],
}

