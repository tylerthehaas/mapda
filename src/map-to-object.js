// @flow

const fold = require('./fold')

function mapToObject(srcMap: Map<string, *>) {
  return fold(
    (a: Object, v: mixed, k: string): Object => {
      if (typeof k !== 'string') {
        throw new Error(
          `Cannot convert key of type ${typeof k} to string. All keys in Map must be of type string.`
        )
      }
      a[k] = v
      return a
    },
    srcMap,
    {}
  )
}

module.exports = mapToObject
