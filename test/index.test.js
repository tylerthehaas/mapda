// @flow

const { expect } = require('chai')

const M = require('../lib/index')

const { describe, it } = global
describe('mapda', () => {
  it('Should export filter', () => {
    expect(M.filter).to.be.an.instanceof(Function)
  })

  it('Should export jsonToMap', () => {
    expect(M.jsonToMap).to.be.an.instanceof(Function)
  })

  it('Should export map', () => {
    expect(M.map).to.be.an.instanceof(Function)
  })

  it('Should export mapToJson', () => {
    expect(M.mapToJson).to.be.an.instanceof(Function)
  })

  it('Should export mapToObject', () => {
    expect(M.mapToObject).to.be.an.instanceof(Function)
  })

  it('Should export objectToMap', () => {
    expect(M.objectToMap).to.be.an.instanceof(Function)
  })

  it('Should export reduce', () => {
    expect(M.reduce).to.be.an.instanceof(Function)
  })
})
