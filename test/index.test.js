// @flow

const { expect } = require('chai')

const M = require('../src/index')

describe('M', () => {
  it('Should contain all functions in lib', () => {
    expect(M.map).to.be.an.instanceof(Function)
    expect(M.filter).to.be.an.instanceof(Function)
  })
})
