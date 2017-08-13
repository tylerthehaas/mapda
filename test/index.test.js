// @flow

const { expect } = require('chai')
const { describe, it } = require('mocha')

const M = require('../src/index')

describe('M', () => {
  it('Should contain all functions in lib', () => {
    expect(M.map).to.be.an.instanceof(Function)
    expect(M.filter).to.be.an.instanceof(Function)
    expect(M.fold).to.be.an.instanceof(Function)
  })
})
