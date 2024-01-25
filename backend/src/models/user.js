const Order = require('./order')
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const Product = require('./product')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', autopopulate: true }],
  type: { type: String, enum: ['owner', 'customer'], default: 'customer' },
})

class User {
  async addItemToCart(itemToAdd) {
    this.cart.push(itemToAdd)
    await this.save()
  }
  async removeItem(itemToRemove) {
    this.cart.pull(itemToRemove)
    await this.save()
  }
  async placeOrder(deliveryAddress) {
    let newOrder = await Order.create({ customer: this, items: this.cart, deliveryAddress: deliveryAddress })
    this.cart = []
    return newOrder
  }

  // Actions only for the owner of the shop
  // Product creation
  async createProduct(title, description, price) {
    return await Product.create({ title, description, price })
  }
}

userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

userSchema.loadClass(User)

module.exports = mongoose.model('User', userSchema)
