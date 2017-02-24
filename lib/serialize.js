/**
 * Serialize value
 * @function serialize
 * @param {Object} value - Value to serialize
 * @returns {Serialized} Values and meta data
 */
'use strict'

const typeOf = require('./type_of')

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
   * @param {Object} values
   * @returns {Object.<string, Serialized>} Values and meta data
   */
  all (values) {
    return Object.keys(values).reduce((serialized, name) => Object.assign(serialized, {
      [name]: serialize(values[ name ])
    }), {})
  }
})

module.exports = serialize

/**
 * @typedef {Object} Serialized
 * @property {*} $src - Source value
 * @property {string} $type - Serialize type
 * @property {string|number|boolean} $value - Primitive value
 */
