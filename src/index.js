const axios = require('axios')

axios.defaults.baseURL = 'http://localhost:3000'

// create user with axious
async function main() {
  await axios.get('/delete')
  const bunny = await axios.post('/users', {
    username: 'Bunny',
    cart: [],
  })

  // create user with axios
  const turtle = await axios.post('/users', {
    username: 'Turtle',
    cart: [],
  })

  // const allUsers = await axios.get('/users')
  // console.log('List of all the users: ', allUsers.data)

  // create products with axios
  const bouquetOne = await axios.post('/products', {
    title: 'Bouquet One',
    description: '10 Pink Peonies',
    price: '30€',
  })

  const bouquetTwo = await axios.post('/products', {
    title: 'Bouquet Two',
    description: '20 Yellow Roses',
    price: '35€',
  })

  const bouquetThree = await axios.post('/products', {
    title: 'Bouquet Three',
    description: '25 Pink Carnations',
    price: '30€',
  })

  const bouquetFour = await axios.post('/products', {
    title: 'Bouquet Four',
    description: '15 Yellow Daffodils',
    price: '25€',
  })

  const bouquetFive = await axios.post('/products', {
    title: 'Bouquet Five',
    description: '25 White Roses',
    price: '40€',
  })

  // const allProducts = await axios.get('/products')
  // console.log('List of all the products: ', allProducts.data)

  await axios.delete(`users/${turtle.data._id}`)

  // const allUsersAT = await axios.get('/users')
  // console.log('List of all the users: ', allUsersAT.data)

  // delete product with axios
  // await axios.delete(`products/${bouquetFive.data.title}`)

  // const allProductsMinusBFive = await axios.get('/products')
  // console.log('List of all the products: ', allProductsMinusBFive.data)

  // add item to cart
  await axios.post(`/users/${bunny.data._id}/cart/items`, {
    itemId: bouquetTwo.data._id,
  })

  await axios.post(`/users/${bunny.data._id}/cart/items`, {
    itemId: bouquetFive.data._id,
  })

  const bunnyAfterAddingItemToHerCart = await axios.get(`users/${bunny.data._id}/cart`)
  console.log('bunnyAfterAddingItemToHerCart: ', bunnyAfterAddingItemToHerCart.data)

  // await axios.delete(`users/${bunny.data._id}/cart/items/${bouquetTwo.data._id}`)

  // const bunnyAfterRemovingItemFromHerCart = await axios.get('users/Bunny')

  // console.log('bunnyAfterRemovingItemFromHerCart: ', bunnyAfterRemovingItemFromHerCart.data)

  //   const testOrder = await axios.post('/orders', {
  //     customer: 'Bunny',
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
}

main().catch(error => console.log('Error: ', error.message, error.stack))

// /users => get , to get all users

// /orders => post, create a new order

// /users/userId/cart/items => post, add an item to the cart

// /users/userId/cart/items/itemId => delete, remove an item from the cart
