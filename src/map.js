// @flow
function map(
  cb /*: (v: mixed, i?: number, a?: mixed[]) => mixed*/,
  target /*: Map<*, *>*/
) /*: Map<*, *>*/ {
  for (const [ k, v ] of target) {
    target.set(k, cb(v))
  }
  return target
}

module.exports = map
