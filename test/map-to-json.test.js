// @flow

const { expect } = require('chai')
const { describe, it } = require('mocha')

const mapToJson = require('../lib/map-to-json')

describe('mapToJson()', () => {
  it('Should be exported', () => {
    expect(mapToJson).to.be.an.instanceOf(Function)
  })

  it('Should return a string', () => {
    const result = mapToJson(new Map())
    expect(typeof result).to.equal('string')
  })

  it('Result should parse to an object', () => {
    const result = JSON.parse(mapToJson(new Map()))
    expect(result).to.eql({})
  })

  it('Should be correct object', () => {
    const result = mapToJson(
      new Map([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 'c' ], [ 'd', [ 'a', 'b', 'c' ] ] ])
    )
    const expected = '{"a":1,"b":2,"c":"c","d":["a","b","c"]}'
    expect(result).to.equal(expected)
  })
})
