const Order = require('./order')
const Address = require('./address')
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
    // find index of item to remove
    const indexOfItem = this.cart.indexOf(itemToRemove)
    // remove item from cart
    this.cart.pull(indexOfItem)
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
