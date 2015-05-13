module.exports = cooled

function cooled(fn, minInterval) {
	var prev = 0
	var hasDelay = false

	return function() {
		if (hasDelay) return

		var now = +new Date
		var next = prev + minInterval
		var ctx = this
		var args = arguments

		if (now > next) {
			return run(ctx, args)
		}

		// delay
		hasDelay = true
		setTimeout(function() {
			run(ctx, args)
		}, next - now)
	}


	function run(ctx, args) {
		fn.apply(ctx, args)
		// reset time after run
		prev = +new Date
		hasDelay = false
	}
}
