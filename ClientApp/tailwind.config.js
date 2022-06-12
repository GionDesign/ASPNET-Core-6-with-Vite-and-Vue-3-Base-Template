// an array of the colour classes to add to the safelist so they do not get purged in
// production compile
const tailwindCssPurgeSafelist = require('./src/config/tailwind-safelist.js')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safeList: tailwindCssPurgeSafelist,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
