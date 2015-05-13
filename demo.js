var cooled = require('./')

var i = 0, timer

var fn = cooled(function() {
	console.log('run', +new Date / 1000)
	i++
	if (i > 5) {
		clearInterval(timer)
	}
}, 1000)

timer = setInterval(fn, 20)
