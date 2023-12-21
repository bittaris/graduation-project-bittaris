class Product {
  constructor(title, description, price) {
    this.title = title
    this.description = description
    this.price = price
  }

  static create({ title, description, price }) {
    const product = new Product(title, description, price)
    Product.list.push(product)
    // or this.list.push(product)
    return product
  }
  static list = []
}

module.exports = Product
