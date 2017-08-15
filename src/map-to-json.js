// @flow

const mapToObj = require('./map-to-object')

function mapToJson(srcMap: Map<string, *>): string {
  return JSON.stringify(mapToObj(srcMap))
}

module.exports = mapToJson
