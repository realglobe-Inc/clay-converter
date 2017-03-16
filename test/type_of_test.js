/**
 * Test case for typeOf.
 * Runs with mocha.
 */
'use strict'

const typeOf = require('../lib/type_of.js')
const { strictEqual } = require('assert')
const co = require('co')

const { SerialTypes } = require('clay-constants')
const { NUMBER, STRING, BOOLEAN, DATE, OBJECT, REF, NULL } = SerialTypes

describe('type-of', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Type of', () => co(function * () {
    strictEqual(typeOf(new Date()), DATE)
    strictEqual(typeOf(0), NUMBER)
    strictEqual(typeOf(1), NUMBER)
    strictEqual(typeOf(false), BOOLEAN)
    strictEqual(typeOf(true), BOOLEAN)
    strictEqual(typeOf(''), STRING)
    strictEqual(typeOf(null), NULL)
    strictEqual(typeOf(undefined), NULL)
    strictEqual(typeOf({}), OBJECT)
    strictEqual(typeOf({ $ref: 'Org#1' }), REF)
  }))
})

/* global describe, before, after, it */
