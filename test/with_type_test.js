/**
 * Test case for withType.
 * Runs with mocha.
 */
'use strict'

const withType = require('../lib/with_type.js')
const { strictEqual, deepEqual, ok } = require('assert')
const co = require('co')

const { SerialTypes } = require('clay-constants')
const { NUMBER, STRING, BOOLEAN, DATE, OBJECT, REF, NULL } = SerialTypes

describe('with-type', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('With type', () => co(function * () {
    strictEqual(withType('1', NUMBER), 1)
    strictEqual(withType('0', NUMBER), 0)
    strictEqual(withType(1, BOOLEAN), true)
    strictEqual(withType(0, BOOLEAN), false)
    strictEqual(withType(0, STRING), '0')
    strictEqual(withType('hoge', STRING), 'hoge')
    strictEqual(withType(null, NULL), null)
    strictEqual(withType(0, NULL), null)
    deepEqual(withType({ foo: 'bar' }, OBJECT), { foo: 'bar' })
    deepEqual(withType({ foo: { $ref: 'Foo#1' } }, REF), { foo: { '$ref': 'Foo#1' } })
    ok(withType('2012-12-12', DATE) instanceof Date)
  }))
})

/* global describe, before, after, it */
