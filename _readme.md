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
