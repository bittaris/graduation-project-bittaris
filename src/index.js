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
  })

  await axios.post('http://localhost:3000/users', {
    username: 'Turtle',
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

// const client = Axios.create({
//   baseURL: 'http://localhost:3000',
//   timeout: 1000,
//   headers: { 'X-Custom-Header': 'foobar' },
// })

// async function main() {
//   try {
//     const usersResponse = await client.get('/users')
//     console.log(usersResponse.data)
//     const productsResponse = await client.get('/products')

//     const products = productsResponse.data
//     console.log(products)

//     const bunny = new User('bunny', [])
//     const turtle = new User('turtle', [])

//     //const bunny = new User(usersResponse.data.username)
//     //const turtle = new User(usersResponse.data.username)

//     const bunnyUser = usersResponse.data[0]
//     console.log('bunnyUser: ' + bunnyUser)
//     const turtleUser = usersResponse.data[1]
//     console.log('turtleUser: ' + turtleUser)

//const bouquetOne = new Product('Bouquet One', '10 Pink Peonies', '30€')
//const bouquetTwo = new Product('Bouquet Two', '20 Yellow Roses', '35€')
//const bouquetThree = new Product('Bouquet Three', '25 Pink Carnations', '30€')
//const bouquetFour = new Product('Bouquet Four', '15 Yellow Daffodils', '25€')
//const bouquetFive = new Product('Bouquet Five', '25 White Roses', '40€')

//     const bouquetOneInfo = productsResponse.data[0]
//     const bouquetOne = new Product(bouquetOneInfo.title, bouquetOneInfo.description, bouquetOneInfo.price)

//     const bouquetTwoInfo = productsResponse.data[1]
//     const bouquetTwo = new Product(bouquetTwoInfo.title, bouquetTwoInfo.description, bouquetTwoInfo.price)

//     const bouquetThreeInfo = productsResponse.data[2]
//     const bouquetThree = new Product(bouquetThreeInfo.title, bouquetThreeInfo.description, bouquetThreeInfo.price)

//     const bouquetFourInfo = productsResponse.data[3]
//     const bouquetFour = new Product(bouquetFourInfo.title, bouquetFourInfo.description, bouquetFourInfo.price)

//     const bouquetFiveInfo = productsResponse.data[4]
//     const bouquetFive = new Product(bouquetFiveInfo.title, bouquetFiveInfo.description, bouquetFiveInfo.price)

//     bunny.addItem(bouquetOne)
//     bunny.addItem(bouquetTwo)
//     bunny.addItem(bouquetFive)
//     bunny.addItem(bouquetFour)
//     console.log("Bunny's cart should have 4 items. Test says: " + bunny.cart.length)

//     turtle.addItem(bouquetThree)
//     turtle.addItem(bouquetFour)
//     turtle.addItem(bouquetFive)
//     console.log("Turtle's cart should have 3 items. Test says: " + turtle.cart.length)

//     const bunnysOrder = new Order(bunny, bunny.cart, 'Lalastr. 22 12345')
//     bunny.placeOrder('Lalastr. 22 12345')
//     console.log("Bunny's order: " + bunnysOrder)
//   } catch (error) {
//     console.error(error)
//   }
// }

// main()
