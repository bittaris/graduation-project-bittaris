const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    autopopulate: true,
  },
})

class Product {}

productSchema.plugin(autopopulate)
module.exports = mongoose.model('Product', productSchema)
