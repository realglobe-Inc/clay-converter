/**
 * Test case for deserialize.
 * Runs with mocha.
 */
'use strict'

const deserialize = require('../lib/deserialize.js')
const { equal } = require('assert')
const co = require('co')

describe('deserialize', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Deserialize', () => co(function * () {
    equal(deserialize({ '$type': 'clay:string', '$value': 'bar' }), 'bar')
    equal(deserialize({ '$type': 'clay:number', '$value': 12 }), 12)
  }))
})

/* global describe, before, after, it */
