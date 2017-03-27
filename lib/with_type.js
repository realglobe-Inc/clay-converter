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
const {
  NUMBER,
  STRING,
  BOOLEAN,
  DATE,
  OBJECT,
  NULL,
  REF,
  ENTITY
} = DataTypes

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
    case REF:
      return value
    case ENTITY:
      return clayEntity(value)
    default:
      console.warn(`[clay-serial] Unknown type: ${type}`)
      return value
  }
}

module.exports = withType
