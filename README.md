# nuxt-paystack

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

>

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-paystack` dependency to your project

```bash
yarn add nuxt-paystack # or npm install nuxt-paystack
```

2. Add `nuxt-paystack` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-paystack',

    // With options
    [
      'nuxt-paystack',
      {
        /* module options */
      }
    ]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) ecj222 <enochchejieh@gmail.com>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-paystack/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-paystack
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-paystack.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-paystack
[github-actions-ci-src]: https://github.com//workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com//actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/.svg
[codecov-href]: https://codecov.io/gh/
[license-src]: https://img.shields.io/npm/l/nuxt-paystack.svg
[license-href]: https://npmjs.com/package/nuxt-paystack
