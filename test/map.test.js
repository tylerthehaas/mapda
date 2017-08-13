// @flow
const { expect } = require('chai')
const sinon = require('sinon')

const map = require('../src/map')

describe('map()', () => {
  let myMap = new Map([ [ 'foo', 1 ], [ 'bar', 2 ], [ 'baz', 3 ] ])
  it('Should call cb once for every key/value in Map', () => {
    const cb = sinon.spy()
    const cb2 = sinon.spy()
    map(cb, myMap)
    expect(cb.callCount).to.equal(3)
    myMap = new Map([ [ 'foo', 1 ], [ 'bar', 2 ] ])
    map(cb2, myMap)
    expect(cb2.callCount).to.equal(2)
  })

  it('Should change value of map', () => {
    const result = map(v => v + 1, myMap)
    const expected = new Map([ [ 'foo', 2 ], [ 'bar', 3 ], [ 'baz', 4 ] ])
    expect(result).to.eql(expected)
  })
})
