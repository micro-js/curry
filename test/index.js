/**
 * Imports
 */

var curry = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should curry fn recursively', function (t) {

  t.equal(curry(add)(1)(1)(1), 3)
  t.equal(curry(add)(1)(1, 1), 3)
  t.equal(curry(add)(1, 1)(1), 3)

  console.log(curry(add)(1, 1, 1))

  var addToTwo = curry(add)(1, 1)

  t.equal(addToTwo(1), 3)
  t.equal(addToTwo(2), 4)
  t.end()
})

test('should invoke fn immediately if approriate', function (t) {

  t.equal(curry(add)(1, 1, 1), 3)
  t.end()
})

function add(a, b, c) {
  return a + b + c
}
