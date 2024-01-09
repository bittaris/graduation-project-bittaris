const Order = require('./order')
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  username: String,
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', autopopulate: true }],
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
}

userSchema.plugin(autopopulate)

userSchema.loadClass(User)

module.exports = mongoose.model('User', userSchema)
