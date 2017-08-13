// @flow
const { curry } = require('ramda')

function uncurriedFilter(predicate, inputMap) {
  const returnMap = new Map([ ...inputMap ])
  for (const [ k, v ] of returnMap) {
    if (!predicate(v)) {
      returnMap.delete(k)
    }
  }

  return returnMap
}

const filter = curry(uncurriedFilter)

module.exports = filter
