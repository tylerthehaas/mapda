// @flow
const { curry } = require('ramda')
function uncurriedMap(
  cb /*: (v: mixed, i?: number, a?: mixed[]) => mixed*/,
  _target /*: Map<*, *>*/
) /*: Map<*, *>*/ {
  const target = new Map([ ..._target ])
  for (const [ k, v ] of target) {
    target.set(k, cb(v))
  }
  return target
}

const map = curry(uncurriedMap)

module.exports = map
