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
- [✨ &nbsp;Getting Started](#getting-started)
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

## Getting Started

Add `'nuxt-paystack'` to the `modules` section of your `nuxt.config.js` file.

```js
{
  modules: ['nuxt-paystack']
}
```

## Usage

1. Inject the module in your `nuxt.config.js` file. See [Getting Started](#getting-started).
2. `this.$visibility` is now available in your components. **Note** that `$visibility` returns an `object` with two properties one is `isVisible` which we would use to check if a user is focused on a page or not, While the other `isSupported` is used to check if the browser supports the Page Visibility API.

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

## License

This project is licensed under [MIT](./LICENSE)
