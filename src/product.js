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

  static deleteProduct(title) {
    const index = Product.list.findIndex(product => product.title === title)
    if (index === -1) {
      return null // Product not found
    }
    const deletedProduct = Product.list.splice(index, 1)[0]
    return deletedProduct
  }
}

module.exports = Product
