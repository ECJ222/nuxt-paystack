const { resolve } = require('path')
// eslint-disable-next-line
module.exports = async function (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'nuxt-paystack.js',
    ssr: false
  })
}

module.exports.meta = require('../package.json')
