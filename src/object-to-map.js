// @flow

function objectToMap(object: Object): Map<string, *> {
  const returnMap = new Map()
  Object.keys(object).forEach((k: string) => {
    returnMap.set(k, object[k])
  })
  return returnMap
}

module.exports = objectToMap
