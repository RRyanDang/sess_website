/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs"),
   require('flowbite/plugin')
  ]
}

