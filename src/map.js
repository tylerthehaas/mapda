// @flow
const { curry } = require('ramda')
function uncurriedMap(
  cb /*: (v: mixed, i?: number, a?: mixed[]) => mixed*/,
  target /*: Map<*, *>*/
) /*: Map<*, *>*/ {
  for (const [ k, v ] of target) {
    target.set(k, cb(v))
  }
  return target
}

const map = curry(uncurriedMap)

module.exports = map
