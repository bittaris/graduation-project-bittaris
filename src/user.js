const Order = require('./order')
class User {
  constructor(username, cart) {
    this.username = username
    this.cart = []
  }
  addItem(item) {
    this.cart.push(item)
  }
  removeItem(itemToRemove) {
    this.cart = this.cart.filter(item => item !== itemToRemove)
  }
  placeOrder(deliveryAddress) {
    let newOrder = new Order(this, this.cart, deliveryAddress)
    this.cart = []
    return newOrder
  }
  static create({ username }) {
    const newUser = new User(username)

    User.list.push(newUser)
    return newUser
  }

  static list = []
}

module.exports = User
