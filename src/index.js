const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Axios = require('axios')

const client = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

async function main() {
  try {
    const response = await client.get('/users')
    console.log(response.data)
    const bunny = new User(response.data.username)
    const turtle = new User(response.data.username)

    const bouquetOne = new Product(
      response.data.cart[0].title,
      response.data.cart[0].description,
      response.data.cart[0].price
    )
    const bouquetTwo = new Product(
      response.data.cart[1].title,
      response.data.cart[1].description,
      response.data.cart[1].price
    )
    const bouquetThree = new Product(
      response.data.cart[2].title,
      response.data.cart[2].description,
      response.data.cart[2].price
    )

    bunny.addItem(bouquetOne)
    console.log("Bunny's cart: " + bunny.cart.length)

    bunny.removeItem(bouquetOne)
    console.log("Bunny's cart: " + bunny.cart.length)

    bunny.addItem(bouquetTwo)
    console.log("Bunny's cart: " + bunny.cart.length)

    bunny.addItem(bouquetTwo)
    console.log("Bunny's cart: " + bunny.cart.length)

    bunny.addItem(bouquetThree)
    console.log("Bunny's cart: " + bunny.cart.length)

    const bunnysOrder = new Order(bunny, bunny.cart, 'Lalastr. 22 12345')

    bunny.placeOrder('Lalastr. 22 12345')
    console.log("Bunny's order: " + bunnysOrder)
  } catch (error) {
    console.error(error)
  }
}

main()
