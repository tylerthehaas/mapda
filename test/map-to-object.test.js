// @flow

const { expect } = require('chai')

const mapToObject = require('../lib/map-to-object')

const { describe, it } = global
describe('mapToObject()', () => {
  it('Should export', () => {
    expect(mapToObject).to.be.an.instanceOf(Function)
  })

  it('Should throw error if key not a string', () => {
    const myMap = new Map([ [ { a: 'a', b: 'b' }, 'b' ] ])
    expect(() => mapToObject(myMap)).to.throw()
  })

  it('Should return an Object', () => {
    const myMap = new Map([ [ 'a', 1 ], [ 'b', 'a' ] ])
    const result = mapToObject(myMap)
    expect(result).to.be.an.instanceOf(Object)
    expect(result).to.not.be.an.instanceof(Array)
  })

  it('Should return correct result', () => {
    const myMap = new Map([ [ 'a', 1 ], [ 'b', 'a' ] ])
    const result = mapToObject(myMap)
    const expected = { a: 1, b: 'a' }
    expect(result).to.eql(expected)
  })
})
