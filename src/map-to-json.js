// @flow

const mapToObj = require('./map-to-object')

function mapToJson(srcMap: Map<string, *>): string {
  srcMap.forEach((k: string) => {
    const typeK = typeof k
    if (typeK !== 'string') {
      throw new Error(
        `Cannot convert key of type ${typeK}. All keys must be strings.`
      )
    }
  })
  return JSON.stringify(mapToObj(srcMap))
}

module.exports = mapToJson
