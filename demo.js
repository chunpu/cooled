var cooled = require('./')

var i = 0, timer

var fn = cooled(function(a, b) {
	console.log('run', +new Date / 1000, a, b, this)
	i++
	if (i > 5) {
		clearInterval(timer)
	}
}, 1000)

timer = setInterval(function() {
	fn.call({foo: 'bar'}, 'a', 'b')
}, 20)
