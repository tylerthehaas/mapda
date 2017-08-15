// @flow

const { expect } = require('chai')

const objectToMap = require('../lib/object-to-map')

describe('objectToMap()', () => {
  it('Should be exported', () => {
    expect(objectToMap).to.be.an.instanceOf(Function)
  })

  it('Should return a Map', () => {
    const myObj = { a: 1, b: 2, c: 'c' }
    expect(objectToMap(myObj)).to.be.an.instanceof(Map)
  })

  it('Should set key/value pair correctly', () => {
    const myObj = { a: 1, b: 2, c: 'c' }
    const expected = new Map([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 'c' ] ])
    expect(objectToMap(myObj)).to.be.eql(expected)
  })
})
