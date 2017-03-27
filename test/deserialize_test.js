/**
 * Test case for deserialize.
 * Runs with mocha.
 */
'use strict'

const deserialize = require('../lib/deserialize.js')
const serialize = require('../lib/serialize.js')
const clayEntity = require('clay-entity')
const clayId = require('clay-id')
const { equal, ok, strictEqual } = require('assert')
const co = require('co')

describe('deserialize', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Deserialize', () => co(function * () {
    equal(deserialize({ $$serial: true, $type: 'cly:string', $value: 'bar' }), 'bar')
    equal(deserialize({ $$serial: true, $type: 'cly:number', $value: 12 }), 12)
  }))

  it('Recursively', () => co(function * () {
    let deserialized = deserialize.recursive({
      foo: { $$serial: true, $type: 'cly:string', $value: 'bar' },
      baz: {
        $$serial: true,
        $type: 'cly:date',
        $value: '2012-12-11T15:00:00.000Z'
      },
      quz: { $$serial: true, $type: 'cly:number', $value: 12 },
      nested: {
        nestedFoo: { $$serial: true, $type: 'cly:string', $value: 'bar2' },
        nestedBaz: {
          $$serial: true,
          $type: 'cly:date',
          $value: '2012-12-12T15:00:00.000Z'
        },
        nestedQuz: { $$serial: true, $type: 'cly:number', $value: 13 }
      }
    })
    equal(deserialized.foo, 'bar')
    ok(deserialized.baz instanceof Date)
    equal(deserialized.nested.nestedFoo, 'bar2')
    strictEqual(deserialized.nested.nestedQuz, 13)
  }))

  it('Entity', () => co(function * () {
    let serialized = serialize({
      entity: clayEntity({ foo: 'bar' })
    })
    let deserialized = deserialize(serialized)
    equal(deserialized.entity.foo, 'bar')
  }))

  it('ID', () => co(function * () {
    let id = clayId()
    let serialized = serialize({
      id
    })
    let deserialized = deserialize(serialized)
    equal(deserialized.id.$$id, true)
    equal(String(deserialized.id), String(id))
    ok(clayId.isId(deserialized.id))
  }))

  it('Run example', () => co(function * () {
    let book = {
      title: 'Wonderful Banana',
      version: 15,
      publishedAt: new Date('2012/12/12')
    }

    let serialized = serialize.all(book)

    console.log(serialized) // Serialized value

    let deserialized = deserialize.all(serialized)
    console.log(deserialized) // Restore the original data
  }))
})

/* global describe, before, after, it */
