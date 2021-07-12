# nuxt-paystack

[![code style: prettier][prettier-src]][prettier-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Paystack payment gateway integration for Nuxt.js

## Table of Contents

- [Requirements](#requirements)
- [Install](#install)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

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
  modules: ["nuxt-paystack"];
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

<!-- Badges -->

[prettier-src]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-href]: https://github.com/prettier/prettier
[npm-version-src]: https://img.shields.io/npm/v/nuxt-paystack/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-paystack
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-paystack.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-paystack
[license-src]: https://img.shields.io/npm/l/nuxt-paystack.svg
[license-href]: https://npmjs.com/package/nuxt-paystack
