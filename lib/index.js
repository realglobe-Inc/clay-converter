/**
 * Conberter for ClayDB
 * @module clay-serial
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get deserialize () { return d(require('./deserialize')) },
  get serialize () { return d(require('./serialize')) },
  get typeOf () { return d(require('./type_of')) },
  get withType () { return d(require('./with_type')) }
}
