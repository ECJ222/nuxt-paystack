module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: ['@nuxtjs'],
  rules: {
    'space-before-function-paren': 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
