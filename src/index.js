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
    const usersResponse = await client.get('/users')
    console.log(usersResponse.data)
    const productsResponse = await client.get('/products')

    const products = productsResponse.data
    console.log(products)

    const bunny = new User(usersResponse.data.username)
    const turtle = new User(usersResponse.data.username)

    const bunnyUser = usersResponse.data[0]
    console.log('bunnyUser: ' + bunnyUser)
    const turtleUser = usersResponse.data[1]
    console.log('turtleUser: ' + turtleUser)

    const bouquetOne = new Product(
      productsResponse.data[0].title,
      productsResponse.data[0].description,
      productsResponse.data[0].price
    )
    const bouquetTwo = new Product(
      productsResponse.data[1].title,
      productsResponse.data[1].description,
      productsResponse.data[1].price
    )
    const bouquetThree = new Product(
      productsResponse.data[2].title,
      productsResponse.data[2].description,
      productsResponse.data[2].price
    )
    const bouquetFour = new Product(
      productsResponse.data[3].title,
      productsResponse.data[3].description,
      productsResponse.data[3].price
    )
    const bouquetFive = new Product(
      productsResponse.data[4].title,
      productsResponse.data[4].description,
      productsResponse.data[4].price
    )

    bunny.addItem(bouquetOne)
    bunny.addItem(bouquetTwo)
    console.log("Bunny's cart: " + bunny.cart.length)

    turtle.addItem(bouquetThree)
    turtle.addItem(bouquetFour)
    turtle.addItem(bouquetFive)
    console.log("Turtle's cart: " + turtle.cart.length)

    const bunnysOrder = new Order(bunny, bunny.cart, 'Lalastr. 22 12345')
    bunny.placeOrder('Lalastr. 22 12345')
    console.log("Bunny's order: " + bunnysOrder)
  } catch (error) {
    console.error(error)
  }
}

main()
