/**
 * Convert value with type
 * @function withType
 * @param {*} value - Value to convert
 * @param {string} type - Clay type string
 * @returns {*} Converted value
 */
'use strict'

const { DataTypes } = require('clay-constants')
const clayEntity = require('clay-entity')
const clayId = require('clay-id')
const {
  NUMBER,
  STRING,
  BOOLEAN,
  DATE,
  OBJECT,
  NULL,
  REF,
  ENTITY,
  ID
} = DataTypes

function withType (value, type) {
  switch (type) {
    case NUMBER:
      return Number(value)
    case STRING:
      return String(value)
    case BOOLEAN: {
      let isFalseString = [ '0', 'false', 'False', 'f', 'F', 'FALSE' ].includes(value)
      if (isFalseString) {
        return false
      }
      return Boolean(value)
    }
    case DATE:
      return new Date(value)
    case OBJECT:
      return Object.assign(value)
    case NULL:
      return null
    case REF:
      return value
    case ENTITY:
      return clayEntity(value)
    case ID:
      return clayId(value)
    default:
      console.warn(`[clay-serial] Unknown type: ${type}`)
      return value
  }
}

module.exports = withType
