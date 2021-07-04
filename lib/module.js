const { resolve } = require('path')
// eslint-disable-next-line
module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['nuxt-paystack'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-paystack.js',
    options
  })
}

module.exports.meta = require('../package.json')
