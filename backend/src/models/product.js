const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
})

class Product {}

module.exports = mongoose.model('Product', productSchema)
