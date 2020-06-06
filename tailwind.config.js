/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1],
      '16/9': [16, 9],
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'focus-within'],
    margin: ['responsive', 'last']
  },
  plugins: [
    require('tailwindcss-aspect-ratio')
  ]
}
