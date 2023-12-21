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
  static create({ username, cart }) {
    const newUser = new User(username, cart)

    User.list.push(newUser)
    return newUser
  }

  static list = []

  static deleteUserbyUsername(username) {
    const index = User.list.findIndex(user => user.username === username)
    if (index === -1) {
      return null // User not found
    }

    const deletedUser = User.list.splice(index, 1)[0]
    return deletedUser
  }
}

module.exports = User