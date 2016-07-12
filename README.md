[![Build Status](https://travis-ci.org/kaelzhang/node-make-unique.svg?branch=master)](https://travis-ci.org/kaelzhang/node-make-unique)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-make-unique?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-make-unique)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/make-unique.svg)](http://badge.fury.io/js/make-unique)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/make-unique.svg)](https://www.npmjs.org/package/make-unique)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-make-unique.svg)](https://david-dm.org/kaelzhang/node-make-unique)
-->

# make-unique

Creates and makes an array without duplicates. Even with array of objects with a specified matcher.

If no `matcher` specified, it will use [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) if `Set` is available in V8.

## Install

```sh
$ npm install make-unique --save
```

## Usage

```js
let unique = require('make-unique')

unique([1, 2, 3, 1]) // [1, 2, 3]
```

### unique(array, matcher)

Cleans an array of objects with a specified filter to tell `unique` how to determine if two items are the 'same'

```js
unique([
  {a: 1},
  {a: 2},
  {a: 1}

], (a, b) => {
  // if `a` and `b` contain the same `.a`, they are the 'same'
  return a.a === b.a
})
// [
//   {a: 1},
//   {a: 2}
// ]
```

## License

MIT
