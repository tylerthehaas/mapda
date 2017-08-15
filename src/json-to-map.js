// @flow

const objToMap = require('./object-to-map')

function jsonToMap(json: string): Map<string, *> {
  return objToMap(JSON.parse(json))
}

module.exports = jsonToMap
