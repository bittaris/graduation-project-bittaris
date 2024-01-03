const Address = require('./address')

class Order {
  constructor(customer, items, deliveryAddress) {
    this.customer = customer
    this.items = items
    this.deliveryAddress = Address.create({
      recipientFullName: deliveryAddress.recipientFullName,
      street: deliveryAddress.street,
      houseNr: deliveryAddress.houseNr,
      zip: deliveryAddress.zip,
      city: deliveryAddress.city,
      country: deliveryAddress.country,
    })
  }

  static create({ customer, items, deliveryAddress }) {
    const newOrder = new Order(customer, items, deliveryAddress)

    Order.list.push(newOrder)

    return newOrder
  }

  static list = []
}

module.exports = Order
