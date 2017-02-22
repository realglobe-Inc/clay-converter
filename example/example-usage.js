'use strict'

const { serialize, deserialize } = require('clay-serial')

{
  let book = {
    title: 'Wonderful Banana',
    version: 15,
    publishedAt: new Date('2012/12/12')
  }

  let serialized = serialize.all(book)

  console.log(serialized) // Serialized value

  let deserialized = deserialize.all(values, meta)
  console.log(deserialized) // Restore the original data
}
