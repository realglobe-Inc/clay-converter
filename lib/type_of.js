/**
 * Get type of an value
 * @function typeOf
 * @param {*} value
 * @returns {string} Clay type string
 */
'use strict'

const { DataTypes } = require('clay-constants')
const { isEntity } = require('clay-entity')
const { isId } = require('clay-id')
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

/** @lends typeOf */
function typeOf (value) {
  if (value instanceof Date) {
    return DATE
  }
  if (value === null) {
    return NULL
  }
  if (isEntity(value)) {
    return ENTITY
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
    case 'object': {
      if (value.$ref) {
        return REF
      }
      if (isId(value)) {
        return ID
      }
      return OBJECT
    }
    default:
      return OBJECT
  }
}

module.exports = typeOf
