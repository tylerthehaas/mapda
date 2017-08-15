// @flow

const { expect } = require('chai')

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
    const myMap = new Map([
      [ 'a', 1 ],
      [ 'b', 2 ],
      [ 'c', 'c' ],
      [ 'd', [ 'a', 'b', 'c' ] ],
    ])
    const result = mapToJson(myMap)
    const expected = '{"a":1,"b":2,"c":"c","d":["a","b","c"]}'
    expect(result).to.equal(expected)
  })

  it('Should throw error if a key is not a string', () => {
    const myMap = new Map([
      [ 'a', 1 ],
      [ { a: 'b' }, 2 ],
      [ 'c', 'c' ],
      [ 'd', [ 'a', 'b', 'c' ] ],
    ])
    expect(() => mapToJson(myMap)).to.throw()
  })
})
