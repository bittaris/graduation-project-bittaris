const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Axios = require('axios')
const { default: axios } = require('axios')

// fetch users with axios
// axios.get('http://localhost:3000/users').then(response => {
//   console.log(response.data)
// })

// create users with axious
async function main() {
  await axios.post('http://localhost:3000/users', {
    username: 'Bunny',
    cart: [],
  })

  await axios.post('http://localhost:3000/users', {
    username: 'Turtle',
    cart: [],
  })

  const allUsers = await axios.get('http://localhost:3000/users')

  console.log('List of all the users: ', allUsers.data)

  // create products with axios
  await axios.post('http://localhost:3000/products', {
    title: 'Bouquet One',
    description: '10 Pink Peonies',
    price: '30€',
  })

  await axios.post('http://localhost:3000/products', {
    title: 'Bouquet Two',
    description: '20 Yellow Roses',
    price: '35€',
  })

  await axios.post('http://localhost:3000/products', {
    title: 'Bouquet Three',
    description: '25 Pink Carnations',
    price: '30€',
  })

  await axios.post('http://localhost:3000/products', {
    title: 'Bouquet Four',
    description: '15 Yellow Daffodils',
    price: '25€',
  })

  await axios.post('http://localhost:3000/products', {
    title: 'Bouquet Five',
    description: '25 White Roses',
    price: '40€',
  })

  const allProducts = await axios.get('http://localhost:3000/products')
  console.log('List of all the products: ', allProducts.data)
}

main()
