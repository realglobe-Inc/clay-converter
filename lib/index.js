/**
 * Conberter for ClayDB
 * @module clay-serial
 */

'use strict'

const _d = (module) => module && module.default || module

const deserialize = _d(require('./deserialize'))
const serialize = _d(require('./serialize'))
const typeOf = _d(require('./type_of'))
const withType = _d(require('./with_type'))

module.exports = {
  deserialize,
  serialize,
  typeOf,
  withType
}
