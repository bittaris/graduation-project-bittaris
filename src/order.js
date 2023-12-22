class Order {
  constructor(customer, items, deliveryAddress) {
    this.customer = customer
    this.items = items
    this.deliveryAddress = deliveryAddress
  }

  static create({ customer, items, deliveryAddress }) {
    const newOrder = new Order(customer, items, deliveryAddress)

    Order.list.push(newOrder)
    return newOrder
  }

  static list = []
}

module.exports = Order
