// @flow

const { expect } = require('chai')
const { describe, it } = require('mocha')

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
})
