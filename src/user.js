const Order = require('./order')
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  username: String,
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', autopopulate: true }],
})

class User {
  async addItemToCart(item) {
    this.cart.push(item)
    await this.save()
  }
  async removeItem(itemToRemove) {
    this.cart.pull(itemToRemove)
    await this.save()
  }
  placeOrder(deliveryAddress) {
    let newOrder = Order.create({ customer: this, items: this.cart, deliveryAddress })
    this.cart = []
    return newOrder
  }
}

userSchema.plugin(autopopulate)

userSchema.loadClass(User)

module.exports = mongoose.model('User', userSchema)
