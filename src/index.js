const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Axios = require('axios')
const { default: axios } = require('axios')

// fetch users with axios
// axios.get('http://localhost:3000/users').then(response => {
//   console.log(response.data)
// })

axios.defaults.baseURL = 'http://localhost:3000'

// create users with axious
async function main() {
  await axios.post('/users', {
    username: 'Bunny',
    cart: [],
  })

  await axios.post('/users', {
    username: 'Turtle',
    cart: [],
  })

  const allUsers = await axios.get('/users')

  console.log('List of all the users: ', allUsers.data)

  // create products with axios
  await axios.post('/products', {
    title: 'Bouquet One',
    description: '10 Pink Peonies',
    price: '30€',
  })

  await axios.post('/products', {
    title: 'Bouquet Two',
    description: '20 Yellow Roses',
    price: '35€',
  })

  await axios.post('/products', {
    title: 'Bouquet Three',
    description: '25 Pink Carnations',
    price: '30€',
  })

  await axios.post('/products', {
    title: 'Bouquet Four',
    description: '15 Yellow Daffodils',
    price: '25€',
  })

  await axios.post('/products', {
    title: 'Bouquet Five',
    description: '25 White Roses',
    price: '40€',
  })

  const allProducts = await axios.get('/products')
  console.log('List of all the products: ', allProducts.data)

  await axios.delete('users/Turtle')

  const allUsersAB = await axios.get('/users')

  console.log('List of all the users: ', allUsersAB.data)

  await axios.delete('products/Bouquet Five')

  const allProductsMinusBFive = await axios.get('/products')
  console.log('List of all the products: ', allProductsMinusBFive.data)

  const testOrder = await axios.post('/orders', {
    customer: 'Bunny',
    items: 'Bouquet Two',
    deliveryAddress: 'Lalastr. 32 12345 Berlin',
  })
  console.log('test order: ', testOrder.data)

  const allOrders = await axios.get('/orders')
  console.log('All orders: ', allOrders.data)
}

main()
