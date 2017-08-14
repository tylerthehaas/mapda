// @flow

const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')

const fold = require('../lib/fold')

describe('fold()', () => {
  it('Should import fold as a function', () => {
    expect(fold).to.be.an.instanceof(Function)
  })

  it('Should throw error if cb not a function', () => {
    expect(() => fold('hello', new Map())).to.throw()
    expect(() => fold(2, new Map())).to.throw()
    expect(() => fold([ 1, 2, 3 ], new Map())).to.throw()
    expect(() => fold({ foo: 1, bar: 2, baz: 'quix' }, new Map())).to.throw()
  })

  it('Should initialize result if initalValue', () => {
    const cb = sinon.spy()
    const result = fold(cb, new Map(), 5)
    expect(result).to.equal(5)
  })

  it('Should call cb for each key/value pair', () => {
    const cb = sinon.spy()
    const myMap = new Map([ [ 'foo', 5 ], [ { bar: 5 }, 3 ], [ () => {}, 7 ] ])
    fold(cb, myMap)
    expect(cb.callCount).to.equal(3)
  })

  it('Should return correct result when working with numbers', () => {
    const myMap = new Map([ [ 'foo', 5 ], [ 'bar', 3 ], [ 'baz', 10 ] ])
    const result = fold((a, v) => (a += v), myMap, 5)
    expect(result).to.equal(23)
  })

  it('Should return correct result when working with an object', () => {
    const myMap = new Map([ [ 'foo', 5 ], [ 'bar', 3 ], [ 'baz', 10 ] ])
    const cb = (a, v, k) => {
      a[k] = v
      return a
    }
    const result = fold(cb, myMap, {})
    expect(result).to.eql({ foo: 5, bar: 3, baz: 10 })
  })

  it('Should return function when partially applied', () => {
    expect(fold(sinon.spy())).to.be.an.instanceof(Function)
    const myMap = new Map([ [ 'foo', 5 ], [ 'bar', 3 ], [ 'baz', 10 ] ])
    const result = fold((a, v) => (a += v), myMap)
    expect(result).to.equal(18)
  })

  it('Should set initialValue to empty version of passed in datatype', () => {
    const myMap = new Map([ [ 'foo', 5 ], [ 'bar', 3 ], [ 'baz', 10 ] ])
    expect(fold((a, v) => (a += v), myMap)).to.equal(18)
    const myMap2 = new Map([ [ 'foo', '5' ], [ 'bar', '3' ], [ 'baz', '10' ] ])
    expect(fold((a, v) => (a += v), myMap2)).to.equal('5310')
  })
})
