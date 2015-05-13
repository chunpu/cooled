cooled
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/cooled.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cooled
[downloads-image]: http://img.shields.io/npm/dm/cooled.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/cooled
[david-image]: http://img.shields.io/david/chunpu/cooled.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/cooled


Make function with a cooldown to avoid too Frequent call

Installation
---

```sh
npm i cooled
```

Api
---

`cooled(func, timeLimit)`

Usage
---

```js
var cooled = require('cooled')

var fn = cooled(function() {
	// do something
}, 1000)

setInterval(fn, 20)
```


Advanced
---

The function returned can be called with arguments

```js
var fn = cooled(function() {
	console.log(this, arguments)
}, 1000)

fn.call({foo: 'bar'}, 1, 2)
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/cooled.svg?style=flat-square
[license-url]: #
