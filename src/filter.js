// @flow

const { curry } = require('ramda')

function uncurriedFilter(
  predicate: (value: mixed, key?: mixed) => boolean,
  inputMap: Map<*, *>
): Map<*, *> {
  if (typeof predicate !== 'function') throw new Error(
      `Expected 1st argument in call to filter to be a function but received ${typeof predicate}`
    )

  const returnMap = new Map([ ...inputMap ])
  for (const [ k, v ] of returnMap) {
    if (!predicate(v, k)) {
      returnMap.delete(k)
    }
  }

  return returnMap
}

const filter = curry(uncurriedFilter)

module.exports = filter
