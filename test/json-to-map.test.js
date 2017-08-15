// @flow

const { expect } = require('chai')
const sinon = require('sinon')

const jsonToMap = require('../lib/json-to-map')
// const objToMap = require('../lib/object-to-map')

const { describe, it } = global
describe('jsonToMap()', () => {
  it('Should be exported', () => {
    expect(jsonToMap).to.be.an.instanceOf(Function)
  })

  it('Should call JSON.parse', () => {
    const json = '{"a":1,"b":2}'
    sinon.spy(JSON, 'parse')
    jsonToMap(json)
    expect(JSON.parse.calledWith(json)).to.equal(true)
    JSON.parse.restore()
  })

  /** @todo figure out how to use spies in this way */
  /*
  it('Should call objToMap', () => {
    const spy = sinon.spy(objToMap)
    const json = '{"a":1,"b":2}'
    jsonToMap(json)
    expect(spy.calledWith(JSON.parse(json))).to.equal(true)
  })
  */

  it('Should return a Map', () => {
    const result = jsonToMap('{"a":1,"b":2}')
    expect(result).to.be.an.instanceof(Map)
  })

  it('Should return correct Map', () => {
    const result = jsonToMap('{"a":1,"b":2}')
    const expected = new Map([ [ 'a', 1 ], [ 'b', 2 ] ])
    expect(result).to.eql(expected)
  })
})
