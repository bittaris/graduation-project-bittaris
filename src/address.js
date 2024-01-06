const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
  recipientFullName: String,
  street: String,
  houseNr: String,
  zip: String,
  city: String,
  country: String,
})

class Address {}

addressSchema.loadClass(Address)

module.exports = mongoose.model('Address', addressSchema)
