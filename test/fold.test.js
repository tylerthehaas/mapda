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
    const myMap = new Map([ [ 'foo', 5 ], [ { bar: 5 }, 'quix' ], [ () => {}, 7 ] ])
    fold(cb, myMap)
    expect(cb.callCount).to.equal(3)
  })
})
