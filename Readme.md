
# curry

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A simple curry implementation

## Installation

    $ npm install @f/curry

## Usage

```js
var curry = require('@f/curry')

var add = curry(function (a, b, c) {
  return a + b + c
})

var addToOne = add(1)
var addToTwo = add(1)
addToTwo(1) // => 3

```

## API

### curry(fn)

- `fn` - function to curry

**Returns:** curried partial of `fn` - which will itself return a curried partial... and so on, until the number of arguments expected by `fn` have been supplied.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/curry.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/curry
[git-image]: https://img.shields.io/github/tag/micro-js/curry.svg?style=flat-square
[git-url]: https://github.com/micro-js/curry
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/curry.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/curry
