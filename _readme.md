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
