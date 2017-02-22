/**
 * Test case for serialize.
 * Runs with mocha.
 */
'use strict'

const serialize = require('../lib/serialize.js')
const { deepEqual } = require('assert')
const co = require('co')

describe('serialize', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Serialize', () => co(function * () {
    deepEqual(serialize('bar'), { '$type': 'clay:string', '$value': 'bar' })
    deepEqual(serialize(12), { '$type': 'clay:number', '$value': 12 })
    let serialized = serialize.all({
      foo: 'bar',
      baz: new Date('2012/12/12'),
      quz: 12
    })
    deepEqual(Object.keys(serialized), [ 'foo', 'baz', 'quz' ])

  }))
})

/* global describe, before, after, it */
