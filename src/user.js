const Order = require('./order')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
})

module.exports = mongoose.model('User', userSchema)

class User {
  addItemToCart(item) {
    this.cart.push(item)
  }
  removeItem(itemToRemove) {
    this.cart = this.cart.filter(item => item !== itemToRemove)
  }
  placeOrder(deliveryAddress) {
    let newOrder = Order.create({ customer: this, items: this.cart, deliveryAddress })
    this.cart = []
    return newOrder
  }
}

userSchema.loadClass(User)

module.exports = mongoose.model('User', userSchema)
