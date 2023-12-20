const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Axios = require('axios')

const client = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

async function getUsers() {
  try {
    const response = await client.get('/users')
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

getUsers()

const bunny = new User('bunny')

const bouquetOne = new Product('Bouquet One', '10 Pink Peonies', '30€')
const bouquetTwo = new Product('Bouquet Two', '20 Yellow Roses', '30€')

bunny.addItem(bouquetOne)
console.log("Bunny's cart: " + bunny.cart)

bunny.removeItem(bouquetOne)
console.log("Bunny's cart: " + bunny.cart)

bunny.addItem(bouquetTwo)
console.log("Bunny's cart: " + bunny.cart)

const bunnysOrder = new Order(bunny, bunny.cart, 'Lalastr. 22 12345')

bunny.placeOrder('Lalastr. 22 12345')
console.log("Bunny's order: " + bunny.placeOrder('Lalastr. 22 12345'))
