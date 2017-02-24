/**
 * Test case for deserialize.
 * Runs with mocha.
 */
'use strict'

const deserialize = require('../lib/deserialize.js')
const { equal, ok, strictEqual } = require('assert')
const co = require('co')

describe('deserialize', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Deserialize', () => co(function * () {
    equal(deserialize({ $$serial: true, $type: 'clay:string', $value: 'bar' }), 'bar')
    equal(deserialize({ $$serial: true, $type: 'clay:number', $value: 12 }), 12)
  }))

  it('Recursively', () => co(function * () {
    let deserialized = deserialize.recursive({
      foo: { $$serial: true, $type: 'clay:string', $value: 'bar' },
      baz: {
        $$serial: true,
        $type: 'clay:date',
        $value: '2012-12-11T15:00:00.000Z'
      },
      quz: { $$serial: true, $type: 'clay:number', $value: 12 },
      nested: {
        nestedFoo: { $$serial: true, $type: 'clay:string', $value: 'bar2' },
        nestedBaz: {
          $$serial: true,
          $type: 'clay:date',
          $value: '2012-12-12T15:00:00.000Z'
        },
        nestedQuz: { $$serial: true, $type: 'clay:number', $value: 13 }
      }
    })
    equal(deserialized.foo, 'bar')
    ok(deserialized.baz instanceof Date)
    equal(deserialized.nested.nestedFoo, 'bar2')
    strictEqual(deserialized.nested.nestedQuz, 13)
  }))
})

/* global describe, before, after, it */
