const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
})

class Product {}

module.exports = mongoose.model('Product', productSchema)
