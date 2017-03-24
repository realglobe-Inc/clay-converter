/**
 * Serialize value
 * @function serialize
 * @param {Object} value - Value to serialize
 * @returns {Serialized} Values and meta data
 */
'use strict'

const typeOf = require('./type_of')
const { DataTypes } = require('clay-constants')
const { OBJECT } = DataTypes

/** @lends serialize */
function serialize (value) {
  return {
    $$serial: true,
    $type: typeOf(value),
    $value: value
  }
}

Object.assign(serialize, {
  /**
   * Serialize object properties
   * @function serialize.all
   * @param {Object} values - Values to serialize
   * @returns {Object.<string, Serialized>} Values and meta data
   */
  all (values) {
    return Object.keys(values).reduce((serialized, name) => Object.assign(serialized, {
      [name]: serialize(values[ name ])
    }), {})
  },
  /**
   * Serialize recursively
   * @function serialize.recursive
   * @param {Object} values - Values to serialize
   * @returns {Object.<string, Serialized>} Values and meta data
   */
  recursive (values) {
    let nestable = typeOf(values) === OBJECT
    if (!nestable) {
      return serialize(values)
    } else {
      return Object.keys(values).reduce((serialized, name) => Object.assign(serialized, {
        [name]: serialize.recursive(values[ name ])
      }), {})
    }
  }
})

module.exports = serialize

/**
 * @typedef {Object} Serialized
 * @property {boolean} $$serial - Marker for serialized
 * @property {string} $type - Serialize type
 * @property {string|number|boolean} $value - Primitive value
 */
