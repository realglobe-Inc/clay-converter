/**
 * Conberter for ClayDB
 * @module clay-serial
 */

'use strict'

const d = (module) => module && module.default || module

const deserialize = d(require('./deserialize'))
const serialize = d(require('./serialize'))
const typeOf = d(require('./type_of'))
const withType = d(require('./with_type'))

module.exports = {
  deserialize,
  serialize,
  typeOf,
  withType
}
