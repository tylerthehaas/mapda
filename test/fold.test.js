// @flow

const { expect } = require('chai')
const { describe, it } = require('mocha')

const fold = require('../src/fold')

describe('fold()', () => {
  it('Should import fold as a function', () => {
    expect(fold).to.be.an.instanceof(Function)
  })

  it('Should throw error if cb not a function', () => {
    expect(() => fold)
  })
})
