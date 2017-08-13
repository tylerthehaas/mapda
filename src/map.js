// @flow
const { curry } = require('ramda')
function uncurriedMap(
  cb /*: (v: mixed, i?: number, a?: mixed[]) => mixed*/,
  _target /*: Map<*, *>*/
) /*: Map<*, *>*/ {
  if (typeof cb !== 'function') throw new Error(
      `1st argument to map must be a function but received ${typeof cb}`
    )
  const target = new Map([ ..._target ])
  for (const [ k, v ] of target) {
    target.set(k, cb(v))
  }
  return target
}

const map = curry(uncurriedMap)

module.exports = map
