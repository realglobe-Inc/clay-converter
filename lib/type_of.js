/**
 * Get type of an value
 * @function typeOf
 * @param {*} value
 * @returns {string} Clay type string
 */
'use strict'

const { SerialTypes } = require('clay-constants')
const { NUMBER, STRING, BOOLEAN, DATE, OBJECT, NULL } = SerialTypes

/** @lends typeOf */
function typeOf (value) {
  if (value instanceof Date) {
    return DATE
  }
  if (value === null) {
    return NULL
  }
  switch (typeof value) {
    case 'string':
      return STRING
    case 'number':
      return NUMBER
    case 'boolean':
      return BOOLEAN
    case 'undefined':
      return NULL
    case 'object':
    default:
      return OBJECT
  }
}

module.exports = typeOf
