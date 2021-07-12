<h1 align="center" >💳 Nuxt-Paystack</h1>
<p align="center">Paystack payment gateway integration for Nuxt.js</p>

<p align="center">
<a href="https://github.com/prettier/prettier">
    <img alt="" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>
<a href="https://npmjs.com/package/nuxt-paystack">
    <img alt="" src="https://img.shields.io/npm/v/nuxt-paystack/latest.svg">
</a>
<a href="https://npmjs.com/package/nuxt-paystack">
    <img alt="" src="https://img.shields.io/npm/dt/nuxt-paystack.svg">
</a>
<a href="https://npmjs.com/package/nuxt-paystack">
    <img alt="" src="https://img.shields.io/npm/l/nuxt-paystack.svg">
</a>
</p>

## Table of Contents

- [✨ &nbsp;Requirements](#requirements)
- [✨ &nbsp;Install](#install)
- [✨ &nbsp;Usage](#usage)
- [📖 &nbsp;License](#license)

## Requirements

- npm
- NuxtJS
- NodeJS

## Install

```bash
# npm
$ npm install nuxt-paystack

# yarn
$ yarn add nuxt-paystack
```

## Usage

Add `'nuxt-paystack'` to the `modules` section of your `nuxt.config.js` file.

```js
{
  modules: ['nuxt-paystack']
}
```

`this.$paystack` is now available and can be used in your components.

```js
{
  ...
  methods: {
    initializePaystack() {
      this.$paystack({
        key: '', // Replace with your public key.
        email: '',
        amount: 0,
        ref: '',
        currency: '',
        callback: () => {
          // Do something.
        },
        onClose: () => {
          // Do something.
        }
      })
    }
  }
  ...
}
```

**Note:** that `$paystack` is a `function` which takes in an `object` as its argument with your paystack details in it, for more information on this you can check [here](https://paystack.com/docs/payments/accept-payments/#collect-customer-information).

## License

This project is licensed under [MIT](./LICENSE)
