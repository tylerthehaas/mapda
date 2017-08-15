// @flow

const { curry } = require('ramda')

function uncurriedMap(
  cb: (value: mixed, key?: mixed) => mixed,
  _target: Map<*, *>
): Map<*, *> {
  if (typeof cb !== 'function') throw new Error(
      `1st argument to map must be a function but received ${typeof cb}`
    )
  const target = new Map([ ..._target ])
  target.forEach((v: mixed, k: mixed): void => {
    target.set(k, cb(v, k))
  })
  return target
}

const map = curry(uncurriedMap)

module.exports = map
