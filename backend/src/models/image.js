const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  source: String,
  alt: String,
  format: String,
})

class Image {}

module.exports = mongoose.model('Image', imageSchema)
