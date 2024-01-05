const axios = require('axios')

axios.defaults.baseURL = 'http://localhost:3000'

// create users with axious
async function main() {
  await axios.post('/users', {
    username: 'Bunny',
    cart: [],
  })

  // delete users with axios
  await axios.post('/users', {
    username: 'Turtle',
    cart: [],
  })

  // const allUsers = await axios.get('/users')

  // console.log('List of all the users: ', allUsers.data)

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

  // const allProducts = await axios.get('/products')
  // console.log('List of all the products: ', allProducts.data)

  await axios.delete('users/Turtle')

  // const allUsersAB = await axios.get('/users')
  // console.log('List of all the users: ', allUsersAB.data)

  await axios.delete('products/Bouquet Five')

  // const allProductsMinusBFive = await axios.get('/products')
  // console.log('List of all the products: ', allProductsMinusBFive.data)

  // add item to cart
  await axios.post('/users/Bunny/cart/items', {
    itemTitle: 'Bouquet Two',
  })

  //   const bunnyAfterAddingItemToHerCart = await axios.get('users/Bunny')
  //   console.log('bunnyAfterAddingItemToHerCart: ', bunnyAfterAddingItemToHerCart.data)

  //   await axios.delete('users/Bunny/cart/items/Bouquet Two')

  //   const bunnyAfterRemovingItemFromHerCart = await axios.get('users/Bunny')

  //   console.log('bunnyAfterRemovingItemFromHerCart: ', bunnyAfterRemovingItemFromHerCart.data)

  //   const testOrder = await axios.post('/orders', {
  //     customer: 'Bunny',
  //     items: 'Bouquet Two',
  //     deliveryAddress: {
  //       recipientFullName: 'Foxxy Brown',
  //       street: 'Lalastr.',
  //       houseNr: '32',
  //       zip: '12345',
  //       city: 'Berlin',
  //       country: 'Germany',
  //     },
  //   })
  //   console.log('test order: ', testOrder.data)

  //   const allOrders = await axios.get('/orders')
  //   console.log('All orders: ', allOrders.data)
  //
}

main().catch(error => console.log('Error: ', error.message, error.stack))

// /users => get , to get all users

// /orders => post, create a new order

// /users/userId/cart/items => post, add an item to the cart

// /users/userId/cart/items/itemId => delete, remove an item from the cart
