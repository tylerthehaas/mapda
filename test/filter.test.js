// @flow
const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')

const filter = require('../lib/filter')

describe('filter()', () => {
  it('Should import filter as a function successfully', () => {
    expect(filter).to.be.an.instanceof(Function)
  })

  it('Should call predicate for each key/value in Map', () => {
    const predicate = sinon.spy()
    const myMap = new Map([ [ 'foo', 1 ], [ 'bar', 2 ], [ 'baz', 3 ] ])
    filter(predicate, myMap)
    expect(predicate.callCount).to.equal(3)

    const predicate2 = sinon.spy()
    const myMap2 = new Map([ [ 'bar', 2 ], [ 'baz', 3 ] ])
    filter(predicate2, myMap2)
    expect(predicate2.callCount).to.equal(2)
  })

  it('Should return a new Map', () => {
    const myMap = new Map([ [ 'foo', 1 ], [ 'bar', 2 ], [ 'baz', 3 ] ])
    const result = filter(v => v > 1, myMap)
    const expected = new Map([ [ 'bar', 2 ], [ 'baz', 3 ] ])
    expect(result).to.not.eql(myMap)
    expect(result).to.eql(expected)
  })

  it('Should filter out key/values not passing predicate fn', () => {
    const myMap = new Map([ [ 'foo', 1 ], [ 'bar', 2 ], [ 'baz', 3 ] ])
    const result = filter(v => v === 1, myMap)
    const expected = new Map([ [ 'foo', 1 ] ])
    expect(result).to.be.eql(expected)
  })

  it('Should return an empty map if no key/values pass predicate', () => {
    const myMap = new Map([ [ 'foo', 1 ], [ 'bar', 2 ], [ 'baz', 3 ] ])
    const result = filter(v => v < 1, myMap)
    const expected = new Map()
    expect(result).to.be.eql(expected)
  })

  it('Should return a function when partially applied', () => {
    const result = filter(v => v > 1)
    expect(result).to.be.an.instanceof(Function)
  })

  it('Should throw error if predicate not a function', () => {
    expect(() => filter('hello', new Map())).to.throw()
    expect(() => filter(2, new Map())).to.throw()
    expect(() => filter([ 1, 2, 3 ], new Map())).to.throw()
    expect(() => filter({ foo: 1, bar: 2, baz: 'quix' }, new Map())).to.throw()
  })
})
