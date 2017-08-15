// @flow

const { expect } = require('chai')
const { describe, it } = require('mocha')

const M = require('../lib/index')

describe('mapda', () => {
  it('Should export map', () => {
    expect(M.map).to.be.an.instanceof(Function)
  })

  it('Should export filter', () => {
    expect(M.filter).to.be.an.instanceof(Function)
  })

  it('Should export fold', () => {
    expect(M.fold).to.be.an.instanceof(Function)
  })

  it('Should export mapToObject', () => {
    expect(M.mapToObject).to.be.an.instanceof(Function)
  })

  it('Should export objectToMap', () => {
    expect(M.objectToMap).to.be.an.instanceof(Function)
  })

  it('Should export mapToJson', () => {
    expect(M.mapToJson).to.be.an.instanceof(Function)
  })
})
