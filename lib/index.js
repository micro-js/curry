/**
 * Modules
 */

var slice = require('@f/slice')
var concat = require('@f/concat')

/**
 * Expose curry
 */

module.exports = curry['default'] = curry

/**
 * curry
 */

function curry(fn) {
	var self = this

  return (function recurse(prev, args, len) {
		var next = concat(prev, args)
		var todo = len - args.length

		return todo <= 0
			? fn.apply(self, next)
      : function() {
    			return recurse(next, slice(arguments), todo)
		    }
	})([], [], fn.length)
}
