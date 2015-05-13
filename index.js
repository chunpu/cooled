module.exports = cooled

function cooled(fn, minInterval) {
	var prev = 0
	var hasDelay = false

	return function() {
		if (hasDelay) return

		var now = +new Date
		var next = prev + minInterval

		if (now > next) {
			return run()
		}

		// delay
		hasDelay = true
		setTimeout(run, next - now)
	}


	function run() {
		fn()
		// reset time after run
		prev = +new Date
		hasDelay = false
	}
}
