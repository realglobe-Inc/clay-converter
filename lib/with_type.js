/**
 * Convert value with type
 * @function withType
 * @param {*} value - Value to convert
 * @param {string} type - Clay type string
 * @returns {*} Converted value
 */
'use strict'

const { SerialTypes } = require('clay-constants')
const { NUMBER, STRING, BOOLEAN, DATE, OBJECT, NULL } = SerialTypes

function withType (value, type) {
  switch (type) {
    case NUMBER:
      return Number(value)
    case STRING:
      return String(value)
    case BOOLEAN:
      return Boolean(value)
    case DATE:
      return new Date(value)
    case OBJECT:
      return Object.assign(value)
    case NULL:
      return null
    default:
      console.warn(`[clay-serial] Unknown type: ${type}`)
      return value
  }
}

module.exports = withType
