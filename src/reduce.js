// @flow

const { curry } = require('ramda')

/** @todo change this to make initial value required */
function uncurriedReduce(
  cb: (accumulator: mixed, currentValue: mixed, currentKey?: mixed) => mixed,
  initialValue: mixed = undefined,
  inputMap: Map<*, *>
): mixed {
  if (typeof cb !== 'function') throw new Error(
      `Expected 1st argument in call to filter to be a function but received ${typeof cb}`
    )

  let result = initialValue

  inputMap.forEach((v: mixed, k: mixed): void => {
    result = cb(result, v, k)
  })

  return result
}

const reduce = curry(uncurriedReduce)

module.exports = reduce
