/**
 * Deserialize value
 * @function deserialize
 * @param {Object} Serialized - Serialized value
 * @returns {Object} Deserialized value
 */

'use strict'

const withType = require('./with_type')

/** @lends deserialize */
function deserialize (serialized) {
  let { $type, $value } = serialized
  return withType($value, $type)
}

Object.assign(deserialize, {
  /**
   * Deserialize object properties
   * @function deserialize.all
   * @param {Object} values
   * @returns {Object.<string, Serialized>} Values and meta data
   */
  all (values) {
    return Object.keys(values).reduce((deserialized, name) => Object.assign(deserialized, {
      [name]: deserialize(values[ name ])
    }), {})
  }
})

module.exports = deserialize
